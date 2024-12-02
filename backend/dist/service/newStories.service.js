"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNewStory = exports.updateNewStory = exports.findIdStory = exports.findNewStories = exports.createNewStory = void 0;
const existingStory_1 = __importDefault(require("../models/existingStory"));
const newStorys_model_1 = __importDefault(require("../models/newStorys.model"));
const existings_service_1 = require("./existings.service");
const users_service_1 = require("./users.service");
const createNewStory = async (id_user, title, description, imageUrl, category) => {
    await (0, users_service_1.findId)(id_user);
    if (!title || !description || !imageUrl || !category) {
        throw new Error("Todos los campos son obligatorios");
    }
    const existingTitle = await (0, existings_service_1.findTitle)(title);
    if (existingTitle) {
        throw new Error("Título de la historia ya existe");
    }
    const newStory = await newStorys_model_1.default.create({ id_user, title, description, imageUrl, category });
    await existingStory_1.default.create({ title, description, imageUrl, category });
    return newStory;
};
exports.createNewStory = createNewStory;
//ESTA HISTORIA DEBERIA CREARSE CON IA O DEBERIA PODER CREARLA EL USUARIO?
//CREADA POR LA INTELIGENCIA UN SOLO ENDPOINT PARA CREAR, ESTA HISTORIA SE DEBE GUARDAR EN LAS HISTORIAS EXISTENTES
//SI EL USUARIO LA PUEDE CREAR DEBE PODER ACTUALIZAR SU HISTORIA PERO NO BORRARLA ESO LO DEBO PODER HACER DE LAS DE HISTORIAS EXISTENTES
const findNewStories = async () => {
    const newStories = await newStorys_model_1.default.findAll();
    if (!newStories) {
        throw new Error("No hay historias disponibles");
    }
    return newStories;
};
exports.findNewStories = findNewStories;
const findIdStory = async (id) => {
    const findId = await newStorys_model_1.default.findByPk(id);
    if (!findId) {
        throw new Error("No hay historias para este usuario");
    }
    return findId;
};
exports.findIdStory = findIdStory;
const updateNewStory = async (id, title, description, imageUrl, category) => {
    const findUser = await (0, exports.findIdStory)(id);
    if (!findUser) {
        throw new Error("Historia no encontrada");
    }
    const updateUser = await newStorys_model_1.default.update({ title, description, imageUrl, category }, { where: { id_newStory: id } });
    return updateUser;
};
exports.updateNewStory = updateNewStory;
const removeNewStory = async (id) => {
    const user = await (0, exports.findIdStory)(id);
    if (!user) {
        throw new Error("Usuario no encontrado");
    }
    const deleteStory = await existingStory_1.default.destroy({ where: { id_newStory: id } });
    return deleteStory;
};
exports.removeNewStory = removeNewStory;
