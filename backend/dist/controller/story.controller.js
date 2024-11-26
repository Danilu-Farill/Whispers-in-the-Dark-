"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStory = void 0;
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const existingStory_1 = __importDefault(require("../models/existingStory"));
const fs_1 = __importDefault(require("fs")); // Para eliminar el archivo temporal
const createStory = async (req, res) => {
    try {
        const file = req.file; // Multer almacena el archivo aquí
        if (!file) {
            res.status(400).json({ message: "No file uploaded" });
            return;
        }
        // Subir imagen a Cloudinary
        const result = await cloudinary_1.default.uploader.upload(file.path, {
            folder: "stories", // Carpeta en Cloudinary
        });
        // Crear una nueva historia en la base de datos con la URL de la imagen
        const newStory = await existingStory_1.default.create({
            id_user: req.body.id_user,
            title: req.body.title,
            description: req.body.description,
            imageUrl: result.secure_url, // URL generada por Cloudinary
            category: req.body.category,
        });
        // Eliminar el archivo temporal
        fs_1.default.unlinkSync(file.path);
        res.status(201).json(newStory);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al subir la imagen y crear la historia" });
    }
};
exports.createStory = createStory;
