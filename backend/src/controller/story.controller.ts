import { Request, Response } from "express";
import cloudinary from "../config/cloudinary";
import StoryExisting from "../models/existingStory";
import fs from "fs"; // Para eliminar el archivo temporal

export const createStory = async (req: Request, res: Response): Promise<void> => {
  try {
    const file = req.file; // Multer almacena el archivo aquí
    if (!file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    // Subir imagen a Cloudinary
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "stories", // Carpeta en Cloudinary
    });

    // Crear una nueva historia en la base de datos con la URL de la imagen
    const newStory = await StoryExisting.create({
      id_user: req.body.id_user,
      title: req.body.title,
      description: req.body.description,
      imageUrl: result.secure_url, // URL generada por Cloudinary
      category: req.body.category,
    });

    // Eliminar el archivo temporal
    fs.unlinkSync(file.path);

    res.status(201).json(newStory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al subir la imagen y crear la historia" });
  }
};
