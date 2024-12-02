import express, { Router } from "express";
import { createStory } from "./../controller/story.controller";
import upload from "../config/multer.config";

const routerCloudinary: Router = express.Router();

routerCloudinary.post("/create", upload.single("image"), createStory);

export {routerCloudinary};


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