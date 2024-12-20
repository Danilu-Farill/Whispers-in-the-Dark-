"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = router;
const existing_router_1 = require("./existing.router");
const newStories_router_1 = require("./newStories.router");
const users_router_1 = require("./users.router");
const story_routes_1 = require("./story.routes");
const express_1 = __importDefault(require("express"));
// import { routerUserExistingStory } from "./userExistingStory";
const auth_router_1 = require("./auth.router");
const openAi_router_1 = require("./openAi.router");
const gemini_router_1 = require("./gemini.router");
function router(app) {
    const routes = express_1.default.Router();
    app.use('/home', routes);
    routes.use('/users', users_router_1.routerUsers);
    routes.use('/auth', auth_router_1.routerAuth);
    routes.use('/story', existing_router_1.routerExisting);
    routes.use('/newStory', newStories_router_1.routerNewStory);
    routes.use('/api', openAi_router_1.routerOpenai);
    routes.use('/api', gemini_router_1.routerGemini);
    // routes.use('/FKtables', routerUserExistingStory);
    routes.use('/cloudinary', story_routes_1.routerCloudinary);
}
