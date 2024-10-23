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
exports.generateStory = void 0;
const openai_config_1 = require("../config/openai.config");
const generateStory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { prompt } = req.body; // El usuario puede enviar un tema o palabra clave
        if (!prompt) {
            return res.status(400).json({ message: "Por favor ingresa un tema para la historia." });
        }
        // Realizar la solicitud a OpenAI
        const response = yield openai_config_1.openai.createCompletion({
            model: "text-davinci-003", // Modelo GPT-3.5
            prompt: `Escribe una historia de terror sobre: ${prompt}`,
            max_tokens: 300, // Máxima cantidad de palabras generadas
            temperature: 0.7, // Creatividad
        });
        const story = response.data.choices[0].text;
        res.status(200).json({ story: story.trim(), }); // Historia generada
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error generando la historia.", });
    }
});
exports.generateStory = generateStory;
