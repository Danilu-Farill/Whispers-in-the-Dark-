import express, { Router } from "express";
import { createStory } from "../controller/existings.controller";
import multer from 'multer';
const upload = multer({ dest: './uploads/' });

const routerCloudinary: Router = express.Router();

// Ruta para subir una imagen (ya configurada)
routerCloudinary.post("/create", upload.single("image"), createStory);
// Nueva ruta para generar historias con IA
// routerCloudinary.post("/generate", generateStory);

export { routerCloudinary };