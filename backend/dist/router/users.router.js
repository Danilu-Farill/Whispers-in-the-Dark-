"use strict";
// import express, { Router} from 'express';
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUsers = void 0;
// const routerUsers: Router = express.Router();
// routerUsers.get('/');
// export {routerUsers};
// routes/story.routes.ts
const express_1 = require("express");
const stories_controller_1 = require("../controller/stories.controller");
const routerUsers = (0, express_1.Router)();
exports.routerUsers = routerUsers;
routerUsers.get('/', stories_controller_1.getAllStories); // GET: /api/stories
routerUsers.post('/', stories_controller_1.createStory); // POST: /api/stories
routerUsers.get('/:id', stories_controller_1.getStoryById); // GET: /api/stories/:id
routerUsers.put('/:id', stories_controller_1.updateStory); // PUT: /api/stories/:id
routerUsers.delete('/:id', stories_controller_1.deleteStory); // DELETE: /api/stories/:id
