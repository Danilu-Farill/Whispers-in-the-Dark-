"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openai = void 0;
// import { Configuration, OpenAIApi } from "openai";
const { Configuration, OpenAIApi } = require('openai');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
exports.openai = openai;
