"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUsers = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controller/users.controller");
const routerUsers = express_1.default.Router();
exports.routerUsers = routerUsers;
routerUsers.get('/', users_controller_1.getAllUsers);
routerUsers.post('/create', users_controller_1.createUser);
routerUsers.post('/login', users_controller_1.loginUser);
routerUsers.get('/:email', users_controller_1.getIdUser);
routerUsers.put('/:email', users_controller_1.putUser);
routerUsers.delete('/:email', users_controller_1.deleteUser);
//con mongo
// import { Router } from 'express';
// import { getAllStories, createStory, getStoryById, updateStory, deleteStory } from '../controller/stories.controller';
// const routerUsers = Router();
// routerUsers.get('/', getAllStories);            // GET: /api/stories
// routerUsers.post('/', createStory);             // POST: /api/stories
// routerUsers.get('/:id', getStoryById);          // GET: /api/stories/:id
// routerUsers.put('/:id', updateStory);           // PUT: /api/stories/:id
// routerUsers.delete('/:id', deleteStory);        // DELETE: /api/stories/:id
// export {routerUsers};
