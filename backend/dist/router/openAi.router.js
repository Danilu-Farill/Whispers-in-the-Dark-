"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerOpenai = void 0;
const express_1 = __importDefault(require("express"));
const openAi_controller_1 = require("../controller/openAi.controller");
const routerOpenai = express_1.default.Router();
exports.routerOpenai = routerOpenai;
routerOpenai.post('/openai', openAi_controller_1.generateStory);
