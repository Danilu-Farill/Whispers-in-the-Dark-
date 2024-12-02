"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHorrorStory = exports.openai = void 0;
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_API_ORG,
});
exports.openai = openai;
const generateHorrorStory = async (category) => {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: "system",
                    content: 'You are a master horror story writer. Create a chilling, atmospheric short story that builds tension and creates a sense of dread.'
                },
                {
                    role: "user",
                    content: category
                        ? `Generate a horror story in the ${category} category. Create a unique, chilling narrative with an original title that captures the essence of the story.`
                        : 'Generate a spine-chilling horror story with an original title and a clear genre category.'
                }
            ],
            max_tokens: 500,
            temperature: 0.7,
            n: 1, // cuantas historias se generan
        });
        const responseStory = response.choices[0].message.content;
        // Parsear la respuesta para extraer los detalles
        if (responseStory == null) {
            throw new Error("No se pudo generar la historia.");
        }
        const titleMatch = responseStory.match(/Title:\s*(.+)/i);
        const categoryMatch = responseStory.match(/Category:\s*(.+)/i);
        const descriptionMatch = responseStory.match(/Story:\s*(.+)/is);
        return {
            title: titleMatch ? titleMatch[1].trim() : 'Untitled Horror',
            description: descriptionMatch ? descriptionMatch[1].trim() : responseStory,
            category: categoryMatch ? categoryMatch[1].trim() : (category || 'General Horror')
        };
        //   return response.choices[0].message.content;
    }
    catch (error) {
        console.error(error);
        throw new Error("Error generando la historia.");
    }
};
exports.generateHorrorStory = generateHorrorStory;
/*
export const generateStoryOpenAi = async(keywords: string) => {
  const response = await openai.completions.create({
    model: "gpt-3.5-1106",
    prompt: `Crea una historia de terror con los siguientes temas: ${keywords}`,
    temperature: 0.7,
    stop: ['\n'],  // Stop at newline character
    // model: 'text-davinci-003',
    max_tokens: 500,
  });

  return response.choices[0].text;
};

export { openai };
*/
