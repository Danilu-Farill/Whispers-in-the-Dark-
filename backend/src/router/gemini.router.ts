import express, {Router} from 'express';
import { createStoryAI } from '../controller/gemini.controller';

const routerGemini: Router = express.Router();

routerGemini.post('/:id_user', createStoryAI );

export {routerGemini};