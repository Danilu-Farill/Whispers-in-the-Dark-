"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUsers = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_controller_1 = require("../controller/users.controller");
const routerUsers = express_1.default.Router();
exports.routerUsers = routerUsers;
routerUsers.use((0, cors_1.default)());
routerUsers.get('/', users_controller_1.getAllUsers);
routerUsers.post('/create', users_controller_1.createUser);
routerUsers.post('/login', users_controller_1.loginUser);
routerUsers.get('/:email', users_controller_1.getIdUser);
routerUsers.put('/:email', users_controller_1.putUser);
routerUsers.delete('/:email', users_controller_1.deleteUser);
