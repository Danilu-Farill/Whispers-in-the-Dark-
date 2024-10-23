"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.getIdUser = exports.getAllUsers = exports.loginUser = exports.createUser = void 0;
const users_model_1 = __importDefault(require("../models/users.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createHashValue = (value) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRounds = 10;
    const salt = yield bcrypt_1.default.genSalt(saltRounds);
    return yield bcrypt_1.default.hashSync(value, salt);
});
const isValidPassword = (psw, encrypted) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.compareSync(psw, encrypted);
});
const createUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const regexEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const { password, email } = req.body;
        if (!password || !email) {
            return resp.status(400).json("Correo electrónico y contraseña son campos obligatorios");
        }
        if (!regexEmail.test(email)) {
            return resp.status(400).json("Correo electrónico inválido");
        }
        const existingEmail = yield users_model_1.default.findOne({ where: { email } });
        if (existingEmail) {
            return resp.status(400).json("Nombre de usuario o correo electrónico ya existe");
        }
        if (!regexPassword.test(password)) {
            return resp.status(400).json("Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
        }
        const pswHash = yield createHashValue(password);
        const user = yield users_model_1.default.create({ email, password: pswHash });
        resp.status(201).json(user);
    }
    catch (error) {
        console.log("Aqui esta el error:", error);
        resp.status(500).json("Error del servidor");
    }
});
exports.createUser = createUser;
const loginUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return resp.status(400).json({ message: "Correo electrónico y contraseña son obligatorios" });
        }
        ;
        const loginUser = yield users_model_1.default.findOne({ where: { email: email } });
        if (!loginUser) {
            return resp.status(404).json({ message: "Usuario no encontrado" });
        }
        let comparePsw;
        if (loginUser !== null) {
            comparePsw = yield isValidPassword(password, loginUser.password);
        }
        if (!comparePsw) {
            return resp.status(401).json({ message: "Contraseña incorrecta" });
        }
        if (!process.env.JWT_SECRET) {
            return resp.status(401).json({ message: "Variable de entorno JWT_SECRET no configurada" });
        }
        const token = yield jsonwebtoken_1.default.sign(email, process.env.JWT_SECRET);
        resp.status(200).json({ message: "Usuario encontrado", token, email });
        // resp.status(200).json({message:"Usuario encontrado", token,username:loginUser?.username, description:loginUser?.description});       
    }
    catch (error) {
        resp.status(500).json({ message: "Error del servidor" });
    }
});
exports.loginUser = loginUser;
const getAllUsers = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_model_1.default.findAll();
        resp.status(200).json(user);
    }
    catch (error) {
        resp.status(500).json("Error del servidor");
    }
});
exports.getAllUsers = getAllUsers;
const getIdUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        // const user = await User.findByPk(); se usa para buscar solo por id
        const findUser = yield users_model_1.default.findOne({ where: { email: email } });
        resp.status(200).json(findUser);
    }
    catch (error) {
        resp.status(500).json("Error del servidor");
    }
});
exports.getIdUser = getIdUser;
const putUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const email = req.params.email;
        const { password, description, username } = req.body;
        const findUser = yield users_model_1.default.findOne({ where: { email: email } });
        if (!findUser) {
            return resp.status(404).json("Usuario no encontrado");
        }
        if (!regexPassword.test(password)) {
            return resp.status(400).json("Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
        }
        const psw = yield createHashValue(password);
        const updateUser = yield users_model_1.default.update({ password: psw, description, username }, { where: { email: email } });
        resp.status(200).json({ message: "user update", psw, username, description });
    }
    catch (error) {
        resp.status(500).json("Error del servidor");
    }
});
exports.putUser = putUser;
const deleteUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const user = yield users_model_1.default.destroy({ where: { email } });
        if (!user) {
            return resp.status(404).json({ message: "Usuario no encontrado" });
        }
        resp.status(200).json({ message: "Usuario eliminado" });
    }
    catch (error) {
        resp.status(500).json("Error del servidor");
    }
});
exports.deleteUser = deleteUser;
