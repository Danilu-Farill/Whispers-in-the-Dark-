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
exports.tokenUser = void 0;
const bcrypt = __importStar(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_service_1 = require("./users.service");
dotenv_1.default.config();
const isValidPassword = (psw, encrypted) => {
    return bcrypt.compareSync(psw, encrypted);
};
const tokenUser = async (email, password) => {
    if (!email || !password) {
        throw new Error("Correo electrónico y contraseña son obligatorios");
    }
    const loginUser = await (0, users_service_1.findEmail)(email);
    // console.log("🚀 ~ tokenUser ~ loginUser:", loginUser.toJSON());
    if (!loginUser) {
        throw new Error("Usuario no encontrado");
    }
    let comparePsw;
    if (loginUser !== null) {
        comparePsw = isValidPassword(password, loginUser.password);
    }
    if (!comparePsw) {
        throw new Error("Contraseña incorrecta");
    }
    if (!process.env.JWT_SECRET) {
        throw new Error("Variable de entorno JWT_SECRET no configurada");
    }
    const token = jsonwebtoken_1.default.sign({ id: loginUser.id_user, email }, process.env.JWT_SECRET);
    return token;
};
exports.tokenUser = tokenUser;
