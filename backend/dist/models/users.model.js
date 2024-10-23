"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
class User extends sequelize_1.Model {
}
// User.init({
//     id_user: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         // field: 'id_user',
//     },
//     email: {
//         type: DataTypes.STRING, 
//         allowNull: false,  
//     },
//     password: {
//         type: DataTypes.STRING,   
//         allowNull: false,
//     },
// }, {
//     sequelize,
//     modelName: "User",
//     tableName: "users",
//     timestamps: false   
// });
// export default User;
User.init({
    id_user: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'users',
    tableName: 'users',
    timestamps: false,
});
exports.default = User;
