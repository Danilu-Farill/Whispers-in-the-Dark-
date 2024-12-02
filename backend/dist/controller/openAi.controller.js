"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStory = void 0;
const openai_config_1 = require("../config/openai.config");
const generateStory = async (req, res) => {
    try {
        const { prompt } = req.body; // El usuario puede enviar un tema o palabra clave
        if (!prompt) {
            return res.status(400).json({ message: "Por favor ingresa una categoria para la historia." });
        }
        // Realizar la solicitud a OpenAI
        const story = await (0, openai_config_1.generateHorrorStory)(prompt);
        res.status(200).json({ title: story.title, description: story.description, category: story.category }); // Historia generada
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error generando la historia." });
    }
};
exports.generateStory = generateStory;
