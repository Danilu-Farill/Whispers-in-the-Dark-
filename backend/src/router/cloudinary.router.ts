import express, { Router } from "express";
import { postNewStory } from "../controller/newStories.controller";
import multer from 'multer';
const upload = multer({ dest: './uploads/' });

const routerCloudinary: Router = express.Router();

// Ruta para subir una imagen (ya configurada)
routerCloudinary.post("/create", upload.single("image"), postNewStory);

export { routerCloudinary };