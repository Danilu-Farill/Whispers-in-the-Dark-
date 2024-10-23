"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const users_model_1 = __importDefault(require("./users.model"));
const existingStory_1 = __importDefault(require("./existingStory"));
class UserExistingStory extends sequelize_1.Model {
}
UserExistingStory.init({
    id_user: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull: false,
        references: {
            model: users_model_1.default,
            key: 'id_user',
        },
        primaryKey: true,
    },
    id_existing: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull: false,
        references: {
            model: existingStory_1.default,
            key: 'id_existing',
        },
        primaryKey: true,
    },
}, {
    sequelize: sequelize_2.sequelize,
    modelName: "UserExistingStory",
    tableName: "user_existing_stories",
    timestamps: false,
    // Elimina columnas generadas automáticamente
    indexes: [
        {
            unique: true,
            fields: ['id_user', 'id_existing']
        }
    ]
});
// Relación many-to-many entre User y ExistingStory
users_model_1.default.belongsToMany(existingStory_1.default, { through: UserExistingStory, foreignKey: 'id_user' });
existingStory_1.default.belongsToMany(users_model_1.default, { through: UserExistingStory, foreignKey: 'id_existing' });
// UserExistingStory.belongsTo(User, { foreignKey: 'id_user' });
// UserExistingStory.belongsTo(StoryExisting, { foreignKey: 'id_existing' });
exports.default = UserExistingStory;
