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
exports.destroyUser = exports.updateId = exports.updateEmail = exports.createUser = exports.findId = exports.findEmail = exports.findUsers = void 0;
const users_model_1 = __importDefault(require("../models/users.model"));
const bcrypt = __importStar(require("bcryptjs"));
const createHashValue = async (value) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hashSync(value, salt);
};
const validatePassword = (password) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regexPassword.test(password)) {
        throw new Error('Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.');
    }
};
const validateEmail = (email) => {
    const regexEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
    if (!regexEmail.test(email)) {
        throw new Error('Correo electrónico inválido');
    }
};
const findUsers = async () => {
    const user = await users_model_1.default.findAll();
    if (!user) {
        throw new Error('No hay usuarios registrados');
    }
    return user;
};
exports.findUsers = findUsers;
const findEmail = async (email) => {
    const findUser = await users_model_1.default.findOne({ where: { email: email } });
    // return !!findUser;//TRUE SI EL USUARIO EXISTE , FALSE SI EL USUARIO NO EXISTE
    // if(findUser) {
    //   throw new Error('Usuario encontrado, no puedes usar este email');
    // }
    // return null;
    return findUser;
};
exports.findEmail = findEmail;
const findId = async (id) => {
    const user = await users_model_1.default.findByPk(id);
    if (!user) {
        throw new Error('Usuario no encontrado');
    }
    return user;
};
exports.findId = findId;
const createUser = async (email, password) => {
    const existingEmail = await (0, exports.findEmail)(email);
    if (existingEmail) {
        throw new Error('El correo electrónico ya está en uso');
    }
    validateEmail(email);
    validatePassword(password);
    const pswHash = await createHashValue(password);
    const user = await users_model_1.default.create({ email, password: pswHash });
    return user;
};
exports.createUser = createUser;
const updateEmail = async (email, newPassword, newEmail) => {
    const findUser = await (0, exports.findEmail)(email);
    if (!findUser) {
        throw new Error('Usuario no encontrado');
    }
    const fields = {}; //SE INICIALIZA VACIO Y POSTERIOR SE AGREGARA EL VALOR QUE NECESITE ACTUALIZAR
    if (newPassword) {
        validatePassword(newPassword);
        fields.password = await createHashValue(newPassword);
    }
    if (newEmail)
        fields.email = newEmail;
    const updateUser = await users_model_1.default.update(fields, { where: { email } });
    return updateUser;
};
exports.updateEmail = updateEmail;
const updateId = async (id_user, newPassword, newEmail) => {
    const findUser = await (0, exports.findId)(id_user);
    if (!findUser) {
        throw new Error('Usuario no encontrado');
    }
    const fields = {}; //SE INICIALIZA VACIO Y POSTERIOR SE AGREGARA EL VALOR QUE NECESITE ACTUALIZAR
    if (newPassword) {
        validatePassword(newPassword);
        fields.password = await createHashValue(newPassword);
    }
    if (newEmail)
        fields.email = newEmail;
    const updateUser = await users_model_1.default.update(fields, { where: { id_user } });
    return updateUser;
};
exports.updateId = updateId;
const destroyUser = async (email) => {
    const findUser = await (0, exports.findEmail)(email);
    if (!findUser) {
        throw new Error('Usuario no encontrado');
    }
    const user = await users_model_1.default.destroy({ where: { email } });
    return user;
};
exports.destroyUser = destroyUser;
// export const putId = async() => {
//   try {
//     const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     const email = req.params.email;
//     const { password, description, username } = req.body;
//     const findUser = await User.findOne({ where: { email: email } });
//     if (!findUser) {
//       return resp.status(404).json("Usuario no encontrado");
//     }
//     if (!regexPassword.test(password)) {
//       return resp.status(400).json("Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
//     }
//     const psw = await createHashValue(password);
//     const updateUser = await User.update(
//       { password: psw, description, username },
//       { where: { email: email } },
//     );
//     console.log("🚀 ~ constputUser:RequestHandler=async ~ updateUser:", updateUser);
//     resp.status(200).json({ message: "user update", psw, username, description });
//   } catch (error) {
//     resp.status(500).json({ message: "Error del servidor", error });
//   }
// };
// try {
//     const id = req.params.id_user;
//     if (!id) {
//       return resp.status(400).json("El id es obligatorio");
//     }
//     const idNumber = parseInt(id, 10);
//     const findUser = await getId(idNumber);
//     resp.status(200).json(findUser?.toJSON());//toJSON PARA EVITAR METADATOS ADICIONALES DE SEQUELITE
//   } catch (error) {
//     console.log("🚀 ~ constgetIdUser:RequestHandler=async ~ error:", error);
//     resp.status(500).json("Error del servidor");
//   }
