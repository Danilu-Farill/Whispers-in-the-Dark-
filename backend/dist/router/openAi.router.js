"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCloudinary = void 0;
const express_1 = __importDefault(require("express"));
const existings_controller_1 = require("../controller/existings.controller");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({ dest: './uploads/' });
const routerCloudinary = express_1.default.Router();
exports.routerCloudinary = routerCloudinary;
// Ruta para subir una imagen (ya configurada)
routerCloudinary.post("/create", upload.single("image"), existings_controller_1.createStory);
