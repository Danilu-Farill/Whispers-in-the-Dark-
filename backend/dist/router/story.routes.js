"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCloudinary = void 0;
const express_1 = __importDefault(require("express"));
const story_controller_1 = require("./../controller/story.controller");
const multer_config_1 = __importDefault(require("../config/multer.config"));
const routerCloudinary = express_1.default.Router();
exports.routerCloudinary = routerCloudinary;
routerCloudinary.post("/create", multer_config_1.default.single("image"), story_controller_1.createStory);
/*
import express, { Router } from "express";
import { postNewStory } from "../controller/newStories.controller";
import multer from 'multer';
const upload = multer({ dest: './uploads/' });

const routerCloudinary: Router = express.Router();

// Ruta para subir una imagen (ya configurada)
routerCloudinary.post("/create", upload.single("image"), postNewStory);

export { routerCloudinary };
*/ 
