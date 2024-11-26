"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putStory = exports.getStoryCategory = exports.getTitle = exports.getAllStoryExisting = exports.getNewStoryOrder = exports.createStory = void 0;
const existingStory_1 = __importDefault(require("../models/existingStory"));
const sequelize_1 = require("sequelize");
const createStory = async (req, resp) => {
    try {
        const { title, description, imageUrl, category } = req.body;
        if (!title || !description || !imageUrl || !category) {
            return resp.status(400).json("Todos los campos son obligatorios");
        }
        const existingTitle = await existingStory_1.default.findOne({ where: { title } });
        if (existingTitle) {
            return resp.status(400).json("Título de la historia ya existe");
        }
        const story = await existingStory_1.default.create({
            title,
            description,
            imageUrl,
            category,
        });
        console.log("🚀 ~ constcreateStory:RequestHandler=async ~ story:", story);
        resp.status(201).json({ message: "Historia creada con éxito" });
    }
    catch (error) {
        console.log("Aqui esta el error:", error);
        resp.status(500).json("Error del servidor");
    }
};
exports.createStory = createStory;
const getNewStoryOrder = async (req, resp) => {
    //buscar por category en query
    try {
        //buscar por categoria
        const findOrder = await existingStory_1.default.findAll({
            order: [
                ["title", "ASC"],
                ["category", "DESC"],
            ],
        });
        return resp.status(200).json({ message: "Historias ordenadas", findOrder });
    }
    catch (error) {
        console.log("🚀 ~ getNewStoryOrder ~ error:", error);
        return resp.status(500).json("Error del servidor");
    }
};
exports.getNewStoryOrder = getNewStoryOrder;
const getAllStoryExisting = async (req, resp) => {
    try {
        const story = await existingStory_1.default.findAll();
        resp.status(200).json(story);
    }
    catch (error) {
        console.log("🚀 ~ constgetAllStoryExisting:RequestHandler=async ~ error:", error);
        resp.status(500).json("Error del servidor");
    }
};
exports.getAllStoryExisting = getAllStoryExisting;
const getTitle = async (req, resp) => {
    try {
        const { title } = req.params;
        const findTitle = await existingStory_1.default.findAll({
            where: {
                title: {
                    [sequelize_1.Op.iLike]: `%${title}%`,
                },
            },
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
};
exports.getTitle = getTitle;
const getStoryCategory = async (req, resp) => {
    try {
        //buscar por categoria
        const { category } = req.params;
        const findNewStoryCategory = await existingStory_1.default.findAll({
            where: { category: category },
        });
        console.log("🚀 ~ getNewStoryCategory ~ findNewStoryCategory:", findNewStoryCategory);
        return resp.status(200).json({ message: "Historias mas recientes" });
    }
    catch (error) {
        console.log("🚀 ~ getStoryCategory ~ error:", error);
        return resp.status(500).json("Error del servidor");
    }
};
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
const putStory = async (req, resp) => {
    try {
        //id_existing, title, description, "imageUrl", category
        const { id_existing } = req.params;
        const { title, description, imageUrl, category } = req.body;
        const findUser = await existingStory_1.default.findOne({ where: { id_existing: id_existing } });
        if (!findUser) {
            return resp.status(404).json("Historia no encontrada");
        }
        const updateUser = await existingStory_1.default.update({ title, description, imageUrl, category }, { where: { id_existing: id_existing } });
        resp.status(200).json({ message: "user update", updateUser });
    }
    catch (error) {
        resp.status(500).json({ message: "Error del servidor", error });
    }
};
exports.putStory = putStory;
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
