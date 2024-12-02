"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
const generative_ai_1 = require("@google/generative-ai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const api = process.env.GEMINI_API_KEY;
if (!api) {
    throw new Error("Missing GEMINI_API_KEY environment variable");
}
const genAI = new generative_ai_1.GoogleGenerativeAI(api);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
        candidateCount: 1,
        stopSequences: ["x"],
        maxOutputTokens: 300,
        temperature: 1.0,
    },
});
exports.model = model;
