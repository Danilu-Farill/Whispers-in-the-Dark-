"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerAuth = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_controller_1 = require("../controller/auth.controller");
const routerAuth = express_1.default.Router();
exports.routerAuth = routerAuth;
routerAuth.use((0, cors_1.default)());
routerAuth.post('/', auth_controller_1.loginUser);
