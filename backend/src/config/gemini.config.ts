import { GoogleGenerativeAI } from "@google/generative-ai";

import dotenv from "dotenv";
dotenv.config();

const api = process.env.GEMINI_API_KEY;
if(!api) {
    throw new Error("Missing GEMINI_API_KEY environment variable");
}
const genAI = new GoogleGenerativeAI(api);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    candidateCount: 1,
    stopSequences: ["x"],
    maxOutputTokens: 300,
    temperature: 1.0,
  },
});

export { model };

