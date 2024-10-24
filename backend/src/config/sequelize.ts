const { Sequelize } = require('sequelize');
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.DB_NAME || !process.env.DB_PASSWORD ) {
    throw new Error('Las variables de entorno para la base de datos no están definidas');
}
// Configura la conexión a la base de datos
// export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//     port: process.env.DB_PORT,
//     logging: false,
//   });
  

  // export const sequelize = new Sequelize({
  //   database: process.env.DB_NAME,
  //   username: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   host: process.env.DB_HOST,
  //   port: Number(process.env.DB_PORT),
  //   dialect: 'postgres',
  //   logging: false,
  // });

  export const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'default',
    password: 'q0M4ifCpcaDS',
    host: 'ep-calm-tree-a4vnnrr4.us-east-1.aws.neon.tech',
    port: 5432,
    database: 'verceldb',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });