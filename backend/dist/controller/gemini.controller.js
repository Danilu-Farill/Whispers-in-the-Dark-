"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStoryAI = void 0;
const gemini_service_1 = require("../service/gemini.service");
const createStoryAI = async (req, res) => {
    try {
        const { id_user } = req.params;
        const { category } = req.body;
        if (!id_user) {
            return res.status(400).json({ message: "User ID is required" });
        }
        ;
        const idNumber = parseInt(id_user, 10);
        const story = await (0, gemini_service_1.generateHorrorStory)(idNumber, category);
        res.status(200).json({ message: "Story generated successfully", story });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: "Error generating story" });
    }
};
exports.createStoryAI = createStoryAI;
