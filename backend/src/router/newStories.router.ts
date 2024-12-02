import express, { Router } from 'express';
import { postNewStory, deleteNewStory, getNewStories, putNewStory } from '../controller/newStories.controller';

const routerNewStory: Router = express.Router();

routerNewStory.get('/', getNewStories);
routerNewStory.post('/:id_user', postNewStory);
routerNewStory.put('/:id', putNewStory);
routerNewStory.delete('/:id', deleteNewStory);

export {routerNewStory};