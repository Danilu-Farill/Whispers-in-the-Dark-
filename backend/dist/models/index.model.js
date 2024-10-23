"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryExisting = exports.NewStory = exports.UserExistingStory = exports.User = void 0;
const users_model_1 = __importDefault(require("./users.model"));
exports.User = users_model_1.default;
const UserExistingStory_model_1 = __importDefault(require("./UserExistingStory.model"));
exports.UserExistingStory = UserExistingStory_model_1.default;
const newStorys_model_1 = __importDefault(require("./newStorys.model"));
exports.NewStory = newStorys_model_1.default;
const existingStory_1 = __importDefault(require("./existingStory"));
exports.StoryExisting = existingStory_1.default;
