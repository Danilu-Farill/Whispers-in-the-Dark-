"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = void 0;
const sequelize_1 = require("./config/sequelize");
const testConnection = async () => {
    try {
        await sequelize_1.sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
        console.log('Base de datos:', sequelize_1.sequelize.getDatabaseName());
    }
    catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};
exports.testConnection = testConnection;
(0, exports.testConnection)();
