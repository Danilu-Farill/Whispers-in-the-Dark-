const { Sequelize } = require('sequelize');
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.DB_NAME || !process.env.DB_PASSWORD ) {
    throw new Error('Las variables de entorno para la base de datos no están definidas');
}
// Configura la conexión a la base de datos
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST, 
    dialect: 'postgres', 
    logging: false,
    port: process.env.DB_PORT
});