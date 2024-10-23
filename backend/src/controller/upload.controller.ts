// import { Request, Response } from 'express';
// import cloudinary from '../config/cloudinary';
// import multer from '../config/multer';

// export const uploadImage = async (req: Request, res: Response): Promise<void> => {
//   try {
//     if (!req.file) {
//       res.status(400).json({ message: "No se recibió ningún archivo." });
//       return;
//     }

//     // El archivo ya fue subido a Cloudinary por multer
//     const imageUrl = req.file.path;

//     // Si necesitas guardar la URL en tu base de datos, hazlo aquí
//     // Ejemplo: await Model.create({ imageUrl: imageUrl });

//     res.status(200).json({ message: "Imagen subida con éxito", url: imageUrl });
//   } catch (error) {
//     console.error("Error subiendo imagen:", error);
//     res.status(500).json({ message: "Error en el servidor" });
//   }
// };
