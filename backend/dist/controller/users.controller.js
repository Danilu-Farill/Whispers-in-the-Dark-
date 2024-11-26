"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.getIdUser = exports.getAllUsers = exports.loginUser = exports.createUser = void 0;
const users_model_1 = __importDefault(require("../models/users.model"));
//import { genSalt, hash, compare } from 'bcryptjs';
// import bcrypt from 'bcrypt';
const bcrypt = __importStar(require("bcryptjs"));
// const bcrypt = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createHashValue = async (value) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hashSync(value, salt);
};
const isValidPassword = async (psw, encrypted) => {
    return await bcrypt.compareSync(psw, encrypted);
};
const createUser = async (req, resp) => {
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
        const existingEmail = await users_model_1.default.findOne({ where: { email } });
        if (existingEmail) {
            return resp.status(400).json("Nombre de usuario o correo electrónico ya existe");
        }
        if (!regexPassword.test(password)) {
            return resp.status(400).json("Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
        }
        const pswHash = await createHashValue(password);
        const user = await users_model_1.default.create({ email, password: pswHash });
        resp.status(201).json(user);
    }
    catch (error) {
        console.log("Aqui esta el error:", error);
        resp.status(500).json("Error del servidor");
    }
};
exports.createUser = createUser;
const loginUser = async (req, resp) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return resp.status(400).json({ message: "Correo electrónico y contraseña son obligatorios" });
        }
        const loginUser = await users_model_1.default.findOne({ where: { email: email } });
        if (!loginUser) {
            return resp.status(404).json({ message: "Usuario no encontrado" });
        }
        let comparePsw;
        if (loginUser !== null) {
            comparePsw = await isValidPassword(password, loginUser.password);
        }
        if (!comparePsw) {
            return resp.status(401).json({ message: "Contraseña incorrecta" });
        }
        if (!process.env.JWT_SECRET) {
            return resp.status(401).json({ message: "Variable de entorno JWT_SECRET no configurada" });
        }
        const token = await jsonwebtoken_1.default.sign(email, process.env.JWT_SECRET);
        resp.status(200).json({ message: "Usuario encontrado", token, email });
        // resp.status(200).json({message:"Usuario encontrado", token,username:loginUser?.username, description:loginUser?.description});
    }
    catch (error) {
        console.log("🚀 ~ constloginUser:RequestHandler=async ~ error:", error);
        resp.status(500).json({ message: "Error del servidor" });
    }
};
exports.loginUser = loginUser;
const getAllUsers = async (req, resp) => {
    try {
        const user = await users_model_1.default.findAll();
        resp.status(200).json(user);
    }
    catch (error) {
        console.log("🚀 ~ constgetAllUsers:RequestHandler=async ~ error:", error);
        resp.status(500).json("Error del servidor");
    }
};
exports.getAllUsers = getAllUsers;
const getIdUser = async (req, resp) => {
    try {
        const email = req.params.email;
        // const user = await User.findByPk(); se usa para buscar solo por id
        const findUser = await users_model_1.default.findOne({ where: { email: email } });
        resp.status(200).json(findUser);
    }
    catch (error) {
        console.log("🚀 ~ constgetIdUser:RequestHandler=async ~ error:", error);
        resp.status(500).json("Error del servidor");
    }
};
exports.getIdUser = getIdUser;
const putUser = async (req, resp) => {
    try {
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const email = req.params.email;
        const { password, description, username } = req.body;
        const findUser = await users_model_1.default.findOne({ where: { email: email } });
        if (!findUser) {
            return resp.status(404).json("Usuario no encontrado");
        }
        if (!regexPassword.test(password)) {
            return resp.status(400).json("Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
        }
        const psw = await createHashValue(password);
        const updateUser = await users_model_1.default.update({ password: psw, description, username }, { where: { email: email } });
        console.log("🚀 ~ constputUser:RequestHandler=async ~ updateUser:", updateUser);
        resp.status(200).json({ message: "user update", psw, username, description });
    }
    catch (error) {
        resp.status(500).json({ message: "Error del servidor", error });
    }
};
exports.putUser = putUser;
const deleteUser = async (req, resp) => {
    try {
        const email = req.params.email;
        const user = await users_model_1.default.destroy({ where: { email } });
        if (!user) {
            return resp.status(404).json({ message: "Usuario no encontrado" });
        }
        resp.status(200).json({ message: "Usuario eliminado" });
    }
    catch (error) {
        console.log("🚀 ~ constdeleteUser:RequestHandler=async ~ error:", error);
        resp.status(500).json("Error del servidor");
    }
};
exports.deleteUser = deleteUser;
