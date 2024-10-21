"use strict";
// controllers/story.controller.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStory = exports.updateStory = exports.getStoryById = exports.createStory = exports.getAllStories = void 0;
const index_service_1 = require("../service/index.service");
const storyService = new index_service_1.StoryService();
// Obtener todas las historias
const getAllStories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stories = yield storyService.getAllStories();
        res.status(200).json(stories);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener las historias' });
    }
});
exports.getAllStories = getAllStories;
// Crear una nueva historia
const createStory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const story = yield storyService.createStory(req.body);
        res.status(201).json(story);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear la historia' });
    }
});
exports.createStory = createStory;
// Obtener historia por ID
const getStoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const story = yield storyService.getStoryById(req.params.id);
        if (!story) {
            res.status(404).json({ message: 'Historia no encontrada' });
            return;
        }
        res.status(200).json(story);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener la historia' });
    }
});
exports.getStoryById = getStoryById;
// Actualizar historia
const updateStory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedStory = yield storyService.updateStory(req.params.id, req.body);
        if (!updatedStory) {
            res.status(404).json({ message: 'Historia no encontrada' });
            return;
        }
        res.status(200).json(updatedStory);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar la historia' });
    }
});
exports.updateStory = updateStory;
// Eliminar historia
const deleteStory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedStory = yield storyService.deleteStory(req.params.id);
        if (!deletedStory) {
            res.status(404).json({ message: 'Historia no encontrada' });
            return;
        }
        res.status(200).json(deletedStory);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar la historia' });
    }
});
exports.deleteStory = deleteStory;
