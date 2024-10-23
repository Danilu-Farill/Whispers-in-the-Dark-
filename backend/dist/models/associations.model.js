"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = __importDefault(require("./users.model"));
const existingStory_1 = __importDefault(require("./existingStory"));
const newStorys_model_1 = __importDefault(require("./newStorys.model"));
const UserExistingStory_model_1 = __importDefault(require("./UserExistingStory.model"));
// NewStory.belongsTo(User, { foreignKey: 'id_user' });
// User.js
users_model_1.default.hasMany(newStorys_model_1.default, { foreignKey: 'id_user' });
users_model_1.default.belongsToMany(existingStory_1.default, { through: UserExistingStory_model_1.default });
// NewStory.js
newStorys_model_1.default.belongsTo(users_model_1.default, { foreignKey: 'id_user' });
// ExistingStory.js
existingStory_1.default.belongsToMany(users_model_1.default, { through: UserExistingStory_model_1.default });
