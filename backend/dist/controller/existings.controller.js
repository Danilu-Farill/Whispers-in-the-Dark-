"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoryCategory = exports.getTitle = exports.getAllStoryExisting = exports.getNewStoryOrder = exports.createStory = void 0;
const existingStory_1 = __importDefault(require("../models/existingStory"));
const sequelize_1 = require("sequelize");
// import ImagenCloudinary from "../config/cloudinary";
//ESTA TABLA DEBO PONERLA EN EL MENU PARA QUE EL USUARIO CREE SU HISTORIA DE TERROR
// export const createStory: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
//     try {
//         // Si recibes una imagen en el request
//         const file = req.file;
//         // Sube la imagen a Cloudinary
//         const result = await cloudinary.uploader.upload(file.path);
//         // Guarda la URL de la imagen subida en la base de datos
//         const newStory = await StoryExisting.create({
//             id_user: req.body.id_user,
//             title: req.body.title,
//             description: req.body.description,
//             imageUrl: result.secure_url, // URL de la imagen subida
//             category: req.body.category,
//         });
//         resp.status(201).json({ message: "Historia creada con éxito"});
//     } catch (error) {
//         console.log("Aqui esta el error:",error); 
//         resp.status(500).json("Error del servidor")    
//     }
// };
// const generateStoryController: RequestHandler = async(req:Request, resp:Response): Promise<void> => {
//     try {
//       const { keywords } = req.body;
//       // Genera la historia con IA
//       const story = await generateStory(keywords);
//       // Aquí puedes guardar la historia generada en la base de datos si lo deseas
//       const newStory = await StoryExisting.create({
//         id_user: req.body.id_user,
//         title: `Historia generada a partir de ${keywords}`,
//         description: story,
//         imageUrl: null, // Puedes generar la imagen después
//         category: 'fantasmas', // Ejemplo de categoría
//       });
//       resp.status(201).json(newStory);
//     } catch (error) {
//       resp.status(500).json({ error: 'Error al generar la historia' });
//     }
//   };
// Configura multer para almacenar los archivos temporalmente en el sistema de archivos
// const createStory: RequestHandler = async (req: Request, resp: Response, next: NextFunction): Promise<any> => {
//     try {
//     //   const file = req;
//     //   if (!file) {
//     //     return resp.status(400).json({ message: "No se proporcionó ninguna imagen" });
//     //   }
//     //   // Sube la imagen a Cloudinary
//     //   const result = await cloudinary.uploader.upload(file.path);
//     //   // Guarda la URL de la imagen subida en la base de datos
//     //   const newStory = await StoryExisting.create({
//     //     id_user: req.body.id_user,
//     //     title: req.body.title,
//     //     description: req.body.description,
//     //     imageUrl: result.secure_url, // URL de la imagen subida
//     //     category: req.body.category,
//     //   });
//       resp.status(201).json({ message: "Historia creada con éxito" });
//     } catch (error) {
//       console.log("Aqui esta el error:", error);
//       resp.status(500).json("Error del servidor");
//     } finally {
//       next();
//     }
//   };
// //   export { storyMiddleware, createStory };
const createStory = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, imageUrl, category } = req.body;
        if (!title || !description || !imageUrl || !category) {
            return resp.status(400).json("Todos los campos son obligatorios");
        }
        const existingTitle = yield existingStory_1.default.findOne({ where: { title } });
        if (existingTitle) {
            return resp.status(400).json("Título de la historia ya existe");
        }
        const story = yield existingStory_1.default.create({ title, description, imageUrl, category });
        console.log("🚀 ~ constcreateStory:RequestHandler=async ~ story:", story);
        resp.status(201).json({ message: "Historia creada con éxito" });
    }
    catch (error) {
        console.log("Aqui esta el error:", error);
        resp.status(500).json("Error del servidor");
    }
});
exports.createStory = createStory;
const getNewStoryOrder = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try { //buscar por categoria
        const findOrder = yield existingStory_1.default.findAll({
            order: [
                ['title', 'ASC'],
                ['category', 'DESC'],
            ]
        });
        return resp.status(200).json({ message: "Historias ordenadas", findOrder });
    }
    catch (error) {
        console.log("🚀 ~ getNewStoryOrder ~ error:", error);
        return resp.status(500).json("Error del servidor");
    }
});
exports.getNewStoryOrder = getNewStoryOrder;
const getAllStoryExisting = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const story = yield existingStory_1.default.findAll();
        resp.status(200).json(story);
    }
    catch (error) {
        console.log("🚀 ~ constgetAllStoryExisting:RequestHandler=async ~ error:", error);
        resp.status(500).json("Error del servidor");
    }
});
exports.getAllStoryExisting = getAllStoryExisting;
const getTitle = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.params;
        const findTitle = yield existingStory_1.default.findAll({
            where: {
                title: {
                    [sequelize_1.Op.iLike]: `%${title}%`
                }
            }
        });
        console.log("🚀 ~ findTitle:", findTitle);
        if (findTitle.length === 0) {
            return resp.status(404).json("Historia no encontrada");
        }
        return resp.status(200).json(findTitle);
    }
    catch (error) {
        console.log("🚀 ~ getTitle ~ error:", error);
        resp.status(500).json("Error del servidor");
    }
});
exports.getTitle = getTitle;
const getStoryCategory = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try { //buscar por categoria
        const { category } = req.params;
        const findNewStoryCategory = yield existingStory_1.default.findAll({ where: { category: category } });
        console.log("🚀 ~ getNewStoryCategory ~ findNewStoryCategory:", findNewStoryCategory);
        return resp.status(200).json({ message: "Historias mas recientes" });
    }
    catch (error) {
        console.log("🚀 ~ getStoryCategory ~ error:", error);
        return resp.status(500).json("Error del servidor");
    }
});
exports.getStoryCategory = getStoryCategory;
//VER TODO ES UN GET ALL
//FILTAR ES UN GET ID O DEPENDIENDO
//NUEVA HISTORIA ES EL OTRO CRUD
//hacer un get por categoria
//un get de ordenado alfabetico
//HACER UPDATE PARA CAMBIAR LA IMAGEN EN ID 3
// export const getIdUser: RequestHandler = async(req:Request, resp:Response): Promise<void> => {
//     try {
//         const email = req.params.email;
//         // const user = await User.findByPk(); se usa para buscar solo por id
//         const findUser = await User.findOne({where: {email: email}});
//         resp.status(200).json(findUser);
//     } catch (error) {
//         resp.status(500).json("Error del servidor")    
//     }
// }
// export const putUser: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
//     try {
//         const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         const email = req.params.email;
//         const { password, description, username } = req.body;
//         const findUser = await User.findOne({where: {email: email}});
//         if (!findUser) {
//             return resp.status(404).json("Usuario no encontrado");
//         }
//         if(!regexPassword.test(password)){
//             return resp.status(400).json("Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
//         }        
//         const psw = await createHashValue(password);
//         const updateUser = await User.update({password: psw, description, username}, {where:{email: email}});
//         resp.status(200).json({message: "user update", psw, username, description});
//     } catch (error) {
//         resp.status(500).json("Error del servidor")    
//     }
// }
// export const deleteUser: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
//     try {
//         const email = req.params.email;
//         const user = await User.destroy({where:{ email }});
//         if (!user) {
//             return resp.status(404).json({message: "Usuario no encontrado"});
//         }
//         resp.status(200).json({message: "Usuario eliminado"});
//     } catch (error) {
//         resp.status(500).json("Error del servidor")    
//     }
// }
