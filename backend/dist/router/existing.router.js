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
routerExisting.get('/', existings_controller_1.getAllStoryExisting); //TODAS LAS HISTORIAS
routerExisting.get('/category', existings_controller_1.getAllCategory); //TODAS LAS CATEGORIAS
routerExisting.get('/:id_user', existings_controller_1.getIdUser); //USUARIO POR ID
routerExisting.get('/category/:category', existings_controller_1.getStoryCategory); //CLASIFICAR POR CATEGORIA
routerExisting.get('/title/:title', existings_controller_1.getTitle); //POR TITULO
routerExisting.post('/', existings_controller_1.registerStory); //CREAR HISTORIAS
routerExisting.put('/:id_existing', existings_controller_1.putStory);
routerExisting.delete('/:id_existing', existings_controller_1.deleteStory);
routerExisting.get('/sort/desc', existings_controller_1.getNewStoryOrder); //CATEGORIAS POR ORDEN 
