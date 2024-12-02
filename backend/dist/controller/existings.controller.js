"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStory = exports.putStory = exports.getIdUser = exports.registerStory = exports.getStoryCategory = exports.getTitle = exports.getAllCategory = exports.getAllStoryExisting = exports.getNewStoryOrder = void 0;
const existings_service_1 = require("../service/existings.service");
const getNewStoryOrder = async (req, resp) => {
    try { //QUERY ?ORDER=DESC
        const order = req.query.order?.toString().toUpperCase() || "ASC";
        if (order !== "ASC" && order !== "DESC") {
            return resp.status(400).json("El orden solo puede ser ASC o DESC");
        }
        const findOrder = await (0, existings_service_1.findStoryOrder)(order);
        return resp.status(200).json({ message: "Historias ordenadas", findOrder });
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        return resp.status(500).json("Error del servidor");
    }
}; //OBTIENE LAS HISTORIAS EN ORDEN DESC ALFABETO
exports.getNewStoryOrder = getNewStoryOrder;
const getAllStoryExisting = async (req, resp) => {
    try {
        const story = await (0, existings_service_1.findStory)();
        resp.status(200).json(story);
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        resp.status(500).json("Error del servidor");
    }
}; //OBTIENE TODAS LAS HISTORIAS 
exports.getAllStoryExisting = getAllStoryExisting;
const getAllCategory = async (req, resp) => {
    try {
        const story = await (0, existings_service_1.findCategory)();
        resp.status(200).json(story);
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        resp.status(500).json("Error del servidor");
    }
}; //OBTIENE TODAS LAS CATEGORIAS PARA MI VISTA PRINCIPAL
exports.getAllCategory = getAllCategory;
const getTitle = async (req, resp) => {
    try {
        const { title } = req.params;
        const findTitle = await (0, existings_service_1.findGetTitle)(title);
        return resp.status(200).json(findTitle);
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        resp.status(500).json("Error del servidor");
    }
}; //BUSCA POR EL TITULO DE LAS HISTORAS PARA MI SEARCH 
exports.getTitle = getTitle;
const getStoryCategory = async (req, resp) => {
    try {
        const { category } = req.params;
        if (!category) {
            return resp.status(400).json("Categoria es requerida");
        }
        const findNewStoryCategory = await (0, existings_service_1.findStoryCategory)(category);
        return resp.status(200).json({ message: "Historias encontradas", category: findNewStoryCategory });
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        return resp.status(500).json("Error del servidor");
    }
}; //BUSCA POR CATEGORIA
exports.getStoryCategory = getStoryCategory;
const registerStory = async (req, resp) => {
    try {
        const { title, description, imageUrl, category } = req.body;
        const story = await (0, existings_service_1.createStory)(title, description, imageUrl, category);
        return resp.status(201).json({ message: "Historia creada con éxito", story });
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        return resp.status(500).json("Error del servidor");
    }
}; // CREAR UNA HISTORIA
exports.registerStory = registerStory;
const getIdUser = async (req, resp) => {
    try {
        const id = req.params.id_existing;
        if (!id) {
            return resp.status(400).json("Id es requerido");
        }
        const idNumber = parseInt(id, 10);
        const findUser = await (0, existings_service_1.findIdStory)(idNumber);
        resp.status(200).json(findUser);
    }
    catch (error) {
        resp.status(500).json("Error del servidor");
    }
}; //buscar historias por id
exports.getIdUser = getIdUser;
const putStory = async (req, resp) => {
    try {
        const { id_existing } = req.params;
        if (!id_existing) {
            return resp.status(400).json("Id es requerido");
        }
        const idNumber = parseInt(id_existing, 10);
        const { title, description, imageUrl, category } = req.body;
        const updateUser = await (0, existings_service_1.updateStory)(idNumber, title, description, imageUrl, category);
        resp.status(200).json({ message: "user update", updateUser });
    }
    catch (error) {
        resp.status(500).json({ message: "Error del servidor", error });
    }
};
exports.putStory = putStory;
const deleteStory = async (req, resp) => {
    try {
        const id = req.params.id_existing;
        if (!id) {
            return resp.status(400).json("Id es requerido");
        }
        const idNumber = parseInt(id, 10);
        const user = await (0, existings_service_1.removeStory)(idNumber);
        return resp.status(200).json({ message: "Usuario eliminado" });
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        return resp.status(500).json("Error del servidor");
    }
};
exports.deleteStory = deleteStory;
