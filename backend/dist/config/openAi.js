"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openai = exports.generateStoryOpenAi = void 0;
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
exports.openai = openai;
const generateStoryOpenAi = async (keywords) => {
    const response = await openai.completions.create({
        model: "gpt-3.5-1106",
        prompt: `Crea una historia de terror con los siguientes temas: ${keywords}`,
        temperature: 0.7,
        stop: ['\n'], // Stop at newline character
        // model: 'text-davinci-003',
        max_tokens: 500,
    });
    return response.choices[0].text;
};
exports.generateStoryOpenAi = generateStoryOpenAi;
// export const generateStoryOpenAi = async(keywords: string) => {
//   const response = await openai.completions.create({
//     prompt: `Crea una historia de terror con los siguientes temas: ${keywords}`,
//     model: "gpt-3.5-1106",
//     // model: 'text-davinci-003',
//     max_tokens: 500,
//   });
//   return response.choices[0].text;
// };
