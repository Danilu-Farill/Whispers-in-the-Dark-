"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerNewStory = void 0;
const express_1 = __importDefault(require("express"));
const newStories_controller_1 = require("../controller/newStories.controller");
const routerNewStory = express_1.default.Router();
exports.routerNewStory = routerNewStory;
routerNewStory.get('/', newStories_controller_1.getNewStories);
routerNewStory.get('/email/:email', newStories_controller_1.getNewStoryCategory);
routerNewStory.get('/:id', newStories_controller_1.getIdNewStories);
routerNewStory.post('/:email', newStories_controller_1.createNewStory);
routerNewStory.put('/:id', newStories_controller_1.putNewStories);
routerNewStory.delete('/:id', newStories_controller_1.deleteNewStories);
