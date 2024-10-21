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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryService = void 0;
const newStory_models_1 = require("../models/newStory.models");
class StoryService {
    // Obtener todas las historias
    getAllStories() {
        return __awaiter(this, void 0, void 0, function* () {
            return newStory_models_1.Story.find();
        });
    }
    // Crear una nueva historia
    createStory(storyData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newStory = new newStory_models_1.Story(storyData);
            return newStory.save();
        });
    }
    // Obtener una historia por ID
    getStoryById(storyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return newStory_models_1.Story.findById(storyId);
        });
    }
    // Actualizar una historia
    updateStory(storyId, storyData) {
        return __awaiter(this, void 0, void 0, function* () {
            return newStory_models_1.Story.findByIdAndUpdate(storyId, storyData, { new: true });
        });
    }
    // Eliminar una historia
    deleteStory(storyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return newStory_models_1.Story.findByIdAndDelete(storyId);
        });
    }
}
exports.StoryService = StoryService;
