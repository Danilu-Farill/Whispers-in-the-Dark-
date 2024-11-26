// const { Sequelize } = require('sequelize');
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const DB_PORT = process.env.DB_PORT || '5432';

if (!process.env.DB_NAME || !process.env.DB_PASSWORD || !process.env.DB_USER ) {
  throw new Error('Las variables de entorno para la base de datos no están definidas');
}
const portDB = parseInt(DB_PORT, 10);
if (isNaN(portDB)) {
  throw new Error('El puerto de la base de datos no es válido');
}
// Configura la conexión a la base de datos
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
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

