"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.getIdUser = exports.getEmailUser = exports.getAllUsers = exports.registerUser = void 0;
const users_service_1 = require("../service/users.service");
const registerUser = async (req, resp) => {
    try {
        const { password, email } = req.body;
        const user = await (0, users_service_1.createUser)(email, password);
        return resp.status(201).json(user);
    }
    catch (error) {
        // Si el error tiene un mensaje, lo enviamos al cliente
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        resp.status(500).json("Error del servidor");
    }
};
exports.registerUser = registerUser;
const getAllUsers = async (req, resp) => {
    try {
        const user = await (0, users_service_1.findUsers)();
        return resp.status(200).json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        return resp.status(500).json("Error del servidor");
    }
};
exports.getAllUsers = getAllUsers;
const getEmailUser = async (req, resp) => {
    try {
        const email = req.params.email;
        const findUser = await (0, users_service_1.findEmail)(email);
        return resp.status(200).json(findUser);
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        return resp.status(500).json("Error del servidor");
    }
};
exports.getEmailUser = getEmailUser;
const getIdUser = async (req, resp) => {
    try {
        const id = req.params.id_user;
        if (!id) { //FALTA CONDICIONAL EN CASO DE QUE NO EXISTA EL ID
            return resp.status(400).json("El id es obligatorio");
        }
        const idNumber = parseInt(id, 10);
        const findUser = await (0, users_service_1.findId)(idNumber);
        if (!findUser) {
            return resp.status(404).json("Usuario no encontrado");
        }
        resp.status(200).json(findUser);
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        return resp.status(500).json("Error del servidor");
    }
};
exports.getIdUser = getIdUser;
const putUser = async (req, resp) => {
    try {
        // const email = req.params.email;
        // const { password } = req.body;
        // const updateUser = await updateEmail(email, password)
        const id = req.params.id_user;
        if (!id) {
            return resp.status(400).json({ message: "El id es obligatorio" });
        }
        const idNumber = parseInt(id, 10);
        const { password, email } = req.body;
        const updateUser = await (0, users_service_1.updateId)(idNumber, password, email);
        resp.status(200).json({ message: "user update", updateUser });
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        resp.status(500).json({ message: "Error del servidor", error });
    }
};
exports.putUser = putUser;
const deleteUser = async (req, resp) => {
    try {
        const email = req.params.email;
        const user = await (0, users_service_1.destroyUser)(email);
        if (!user) {
            return resp.status(404).json({ message: "Usuario no encontrado" });
        }
        resp.status(200).json({ message: "Usuario eliminado" });
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        resp.status(500).json("Error del servidor");
    }
};
exports.deleteUser = deleteUser;
