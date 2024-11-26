"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
// const { Sequelize } = require('sequelize');
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DB_PORT = process.env.DB_PORT || '5432';
if (!process.env.DB_NAME || !process.env.DB_PASSWORD || !process.env.DB_USER) {
    throw new Error('Las variables de entorno para la base de datos no están definidas');
}
const portDB = parseInt(DB_PORT, 10);
if (isNaN(portDB)) {
    throw new Error('El puerto de la base de datos no es válido');
}
// Configura la conexión a la base de datos
exports.sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: portDB,
    logging: false,
});
// export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'postgres',
//   logging: false,
//   port: process.env.DB_PORT,
//   dialectOptions: {
//   ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
// });
