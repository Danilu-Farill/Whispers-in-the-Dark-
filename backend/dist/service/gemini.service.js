"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHorrorStory = void 0;
const gemini_config_1 = require("../config/gemini.config");
const existingStory_1 = __importDefault(require("../models/existingStory"));
const newStorys_model_1 = __importDefault(require("../models/newStorys.model"));
const existings_service_1 = require("./existings.service");
const generateHorrorStory = async (id_user, category) => {
    if (!category) {
        throw new Error("La categoria es obligatoria");
    }
    // const prompt = `Genera una historia de terror y suspenso en la categoría "${category}" con entre 200 y 400 palabras. Devuelve un título único y diferente para cada categoria de 2 a 3 palabras seguido por la historia.`;
    const prompt = `Genera una historia de terror y suspenso en la categoría "${category}" con entre 200 y 400 palabras. Devuelve un título que no tenga simbolos que sea único para cada descripcion de la historia solicitada, aleatorio, diferente para cada historia y categoria que se especifique de 2 a 5 palabras seguido por la historia. Usa elementos creativos relacionados con la categoría.`;
    const result = await gemini_config_1.model.generateContent(prompt);
    if (!result || !result.response) {
        throw new Error("Failed to generate story");
    }
    const generatedStory = result.response.text();
    const lines = generatedStory.split("\n").filter(line => line.trim() !== ""); // Eliminar líneas vacías, Divide el contenido en líneas. Limpiar y filtrar líneas vacías.
    if (lines.length < 2) {
        throw new Error("Failed to extract title and description from story");
    }
    const title = lines[0]?.trim(); // La primera línea es el título, Asignar la primera línea como título.
    const description = lines.slice(1).join(" ").trim(); // Las líneas restantes forman la descripción,  Combinar las líneas restantes en una descripción.
    if (!title || title.length < 5) {
        throw new Error("Título inválido generado por la IA");
    }
    // const description = result.response.text();
    // const title = `Historia generada: ${prompt.substring(0, 20)}...`;
    const existingTitle = await (0, existings_service_1.findTitle)(title);
    if (existingTitle) {
        throw new Error("Ya existe una historia con un título similar");
    }
    const newStory = await newStorys_model_1.default.create({
        id_user,
        title,
        description,
        imageUrl: "default_image_url.jpg", // Cambia si tienes imágenes generadas
        category,
    });
    await existingStory_1.default.create({
        title,
        description,
        imageUrl: "default_image_url.jpg",
        category,
    });
    return newStory;
};
exports.generateHorrorStory = generateHorrorStory;
