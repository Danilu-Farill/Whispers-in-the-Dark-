import express, { Router } from 'express';
import { createStory, getAllStoryExisting, getTitle } from '../controller/existings.controller';

const routerExisting: Router = express.Router();

routerExisting.get('/', getAllStoryExisting);
routerExisting.post('/', createStory);
routerExisting.get('/title/:title', getTitle);
// routerExisting.get('/order', getNewStoryOrder)

export { routerExisting };