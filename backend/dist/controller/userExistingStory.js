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
exports.getAllUserExistingStories = exports.createUserExistingStory = void 0;
const createUserExistingStory = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { id_user, id_existing } = req.body;
        // const userExistingStory = await UserExistingStory.create({ id_user, id_existing });
        // resp.status(201).json(userExistingStory);
    }
    catch (error) {
        resp.status(500).json({ message: "Error creando relación", error });
    }
});
exports.createUserExistingStory = createUserExistingStory;
const getAllUserExistingStories = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const userExistingStories = await UserExistingStory.findAll();
        // resp.status(200).json(userExistingStories);
    }
    catch (error) {
        resp.status(500).json({ message: "Error obteniendo relaciones", error });
    }
});
exports.getAllUserExistingStories = getAllUserExistingStories;
