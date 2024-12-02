"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNewStory = exports.putNewStory = exports.getIdUser = exports.getNewStories = exports.postNewStory = void 0;
const newStories_service_1 = require("../service/newStories.service");
const postNewStory = async (req, resp) => {
    try {
        const { id_user } = req.params;
        if (!id_user) {
            return resp.status(400).json({ message: "El id del usuario es obligatorio" });
        }
        ;
        const idNumber = parseInt(id_user, 10);
        const { title, description, imageUrl, category } = req.body;
        const story = await (0, newStories_service_1.createNewStory)(idNumber, title, description, imageUrl, category);
        return resp.status(201).json({ message: "Historia creada con éxito", story });
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        return resp.status(500).json("Error del servidor");
    }
}; //EL USUARIO PUEDE CREAR LA HISTORIA Y SE AGRAGA
exports.postNewStory = postNewStory;
const getNewStories = async (req, resp) => {
    try {
        const newStories = await (0, newStories_service_1.findNewStories)();
        return resp.status(200).json({ message: "Todas las historias mas recientes", newStories });
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        return resp.status(500).json("Error del servidor");
    }
};
exports.getNewStories = getNewStories;
const getIdUser = async (req, resp) => {
    try {
        const id = req.params.id_newStory;
        if (!id) {
            return resp.status(400).json("Id es requerido");
        }
        const idNumber = parseInt(id, 10);
        const findUser = await (0, newStories_service_1.findIdStory)(idNumber);
        resp.status(200).json(findUser);
    }
    catch (error) {
        resp.status(500).json("Error del servidor");
    }
}; //buscar historias por id
exports.getIdUser = getIdUser;
const putNewStory = async (req, resp) => {
    try {
        const { id_newStory } = req.params;
        if (!id_newStory) {
            return resp.status(400).json("Id es requerido");
        }
        const idNumber = parseInt(id_newStory, 10);
        const { title, description, imageUrl, category } = req.body;
        const updateUser = await (0, newStories_service_1.updateNewStory)(idNumber, title, description, imageUrl, category);
        resp.status(200).json({ message: "user update", updateUser });
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        resp.status(500).json({ message: "Error del servidor", error });
    }
};
exports.putNewStory = putNewStory;
const deleteNewStory = async (req, resp) => {
    try {
        const id = req.params.id_newStory;
        if (!id) {
            return resp.status(400).json("Id es requerido");
        }
        const idNumber = parseInt(id, 10);
        const user = await (0, newStories_service_1.removeNewStory)(idNumber);
        return resp.status(200).json({ message: "Usuario eliminado" });
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        return resp.status(500).json("Error del servidor");
    }
};
exports.deleteNewStory = deleteNewStory;
