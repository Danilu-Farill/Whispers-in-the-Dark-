import express, { Router } from "express";
import { generateStory } from "../controller/openAi.controller";

const routerOpenai: Router = express.Router();

routerOpenai.post('/openai', generateStory);

export { routerOpenai };