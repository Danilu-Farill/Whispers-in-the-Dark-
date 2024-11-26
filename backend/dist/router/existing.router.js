"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerExisting = void 0;
const express_1 = __importDefault(require("express"));
const existings_controller_1 = require("../controller/existings.controller");
const routerExisting = express_1.default.Router();
exports.routerExisting = routerExisting;
routerExisting.get('/', existings_controller_1.getAllStoryExisting);
routerExisting.post('/', existings_controller_1.createStory);
routerExisting.get('/title/:title', existings_controller_1.getTitle);
// routerExisting.get('/order', getNewStoryOrder)
routerExisting.put('/:id_existing', existings_controller_1.putStory);
