"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUserExistingStories = exports.createUserExistingStory = void 0;
const UserExistingStory_model_1 = __importDefault(require("../models/UserExistingStory.model"));
const createUserExistingStory = async (req, resp) => {
    try {
        // const { id_user, id_existing } = req.body;
        // const userExistingStory = await UserExistingStory.create({ id_user, id_existing });
        // resp.status(201).json(userExistingStory);
    }
    catch (error) {
        resp.status(500).json({ message: "Error creando relación", error });
    }
};
exports.createUserExistingStory = createUserExistingStory;
const getAllUserExistingStories = async (req, resp) => {
    try {
        const userExistingStories = await UserExistingStory_model_1.default.findAll();
        resp.status(200).json(userExistingStories);
    }
    catch (error) {
        resp.status(500).json({ message: "Error obteniendo relaciones", error });
    }
};
exports.getAllUserExistingStories = getAllUserExistingStories;
