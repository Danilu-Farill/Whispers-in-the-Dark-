"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const users_model_1 = __importDefault(require("./users.model"));
class NewStory extends sequelize_1.Model {
}
NewStory.init({
    id_newStory: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        // field: 'id_newStory',
    },
    id_user: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: users_model_1.default,
            key: 'id_user',
        },
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: sequelize_1.DataTypes.TEXT,
    },
    category: {
        type: sequelize_1.DataTypes.ENUM('Fantasmas', 'Vampiros', 'Zombies', 'Hombres lobo', 'Kikimora', 'Yōkai', 'Brujas', 'Demonios', 'Slenderman', 'Mutantes', 'Bogeyman', 'Duendes'),
        allowNull: false
    }
}, {
    sequelize: sequelize_2.sequelize,
    modelName: "NewStory",
    tableName: "newStories",
    timestamps: false
});
// Relación con el modelo User
users_model_1.default.hasMany(NewStory, { foreignKey: 'id_user' });
NewStory.belongsTo(users_model_1.default, { foreignKey: 'id_user' });
// NewStory.belongsTo(User, { foreignKey: 'id_user' });
exports.default = NewStory;
// NewStory.init(
//   {
//     id_new: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     image: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     category: {
//       type: DataTypes.ENUM('horror', 'fantasy', 'sci-fi'), // Añade los tipos de categorías que tengas.
//       allowNull: false,
//     },
//     id_user: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: User,
//         key: 'id_user',
//       },
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'new_stories',
//     timestamps: false,
//   }
// );
// // Relación con el modelo User
// User.hasMany(NewStory, { foreignKey: 'id_user' });
// NewStory.belongsTo(User, { foreignKey: 'id_user' });
