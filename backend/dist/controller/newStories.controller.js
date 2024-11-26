"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNewStories = exports.putNewStories = exports.getNewStoryOrder = exports.getNewStoryCategory = exports.getIdNewStories = exports.getNewStories = exports.createNewStory = void 0;
const newStorys_model_1 = __importDefault(require("../models/newStorys.model"));
const users_model_1 = __importDefault(require("../models/users.model"));
const createNewStory = async (req, resp) => {
    try { //email params para que se cree en base al email del usuario
        const { email } = req.params;
        const { title, description, imageUrl, category } = req.body;
        if (!title || !description || !imageUrl || !category) {
            return resp.status(400).json("Todos los campos son obligatorios");
        }
        const findEmailUser = await users_model_1.default.findOne({ where: { email: email } });
        if (!findEmailUser) {
            return resp.status(404).json("No se encontró usuario con el email");
        }
        const id_user = findEmailUser.id_user; // Obten el id_user
        const existingTitle = await newStorys_model_1.default.findOne({ where: { title } });
        if (existingTitle) {
            return resp.status(400).json("Título de la historia ya existe");
        }
        const story = await newStorys_model_1.default.create({ title, description, imageUrl, category, id_user });
        console.log("🚀 ~ constcreateNewStory:RequestHandler=async ~ story:", story);
        resp.status(201).json({ message: "Historia creada con éxito" });
    }
    catch (error) {
        console.log("🚀 ~ constcreateNewStory:RequestHandler=async ~ error:", error);
        resp.status(500).json("Error del servidor");
    }
};
exports.createNewStory = createNewStory;
const getNewStories = async (req, resp) => {
    try {
        const newStories = await newStorys_model_1.default.findAll();
        return resp.status(200).json({ message: "Todas las historias mas recientes", newStories });
    }
    catch (error) {
        console.log("🚀 ~ getNewStories ~ error:", error);
        return resp.status(500).json("Error del servidor");
    }
};
exports.getNewStories = getNewStories;
const getIdNewStories = async (req, resp) => {
    try { //buscar por categoria
        return resp.status(200).json({ message: "Historias mas recientes" });
    }
    catch (error) {
        console.log("🚀 ~ getNewStories ~ error:", error);
        return resp.status(500).json("Error del servidor");
    }
};
exports.getIdNewStories = getIdNewStories;
const getNewStoryCategory = async (req, resp) => {
    try { //buscar por categoria
        const { category } = req.query;
        const { email } = req.params;
        if (!category) {
            return resp.status(400).json({ message: "Falta el parámetro de consulta" });
        }
        const findEmailUser = await users_model_1.default.findOne({ where: { email: email } });
        if (!findEmailUser) {
            return resp.status(404).json("No se encontró el email");
        }
        const id_user = findEmailUser.id_user; // Obten el id_use
        console.log("id_user:", id_user);
        console.log("email:", email);
        console.log("category:", category);
        const findNewStoryCategory = await newStorys_model_1.default.findAll({ where: { id_user, category: category } });
        if (!findNewStoryCategory.length) {
            return resp.status(404).json({ message: "No se encontraron historias con la categoría especificada" });
        }
        return resp.status(200).json({ message: "Historias mas recientes", findNewStoryCategory });
    }
    catch (error) {
        console.log("🚀 ~ getNewStories ~ error:", error);
        return resp.status(500).json("Error del servidor");
    }
};
exports.getNewStoryCategory = getNewStoryCategory;
const getNewStoryOrder = async (req, resp) => {
    try { //buscar por categoria
        const findOrder = await newStorys_model_1.default.findAll({
            order: [
                ['title', 'ASC'],
                // ['category', 'DESC'],
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
const putNewStories = async (req, resp) => {
    try {
        return resp.status(200).json({ message: "Historias mas recientes" });
    }
    catch (error) {
        console.log("🚀 ~ putNewStories ~ error:", error);
        return resp.status(500).json("Error del servidor");
    }
};
exports.putNewStories = putNewStories;
const deleteNewStories = async (req, resp) => {
    try {
        return resp.status(200).json({ message: "Historias mas recientes" });
    }
    catch (error) {
        console.log("🚀 ~ deleteNewStories ~ error:", error);
        return resp.status(500).json("Error del servidor");
    }
};
exports.deleteNewStories = deleteNewStories;
//buscar por categoria
//crear una vista para que el usuario pueda crear su historia, debe llevar titulo, descripcion, imagen generada, categoriade las existentes
