import express, { Router } from 'express';
import { createNewStory, deleteNewStories, getIdNewStories, getNewStories, getNewStoryCategory, putNewStories } from '../controller/newStories.controller';

const routerNewStory: Router = express.Router();

routerNewStory.get('/', getNewStories);
routerNewStory.get('/email/:email', getNewStoryCategory);
routerNewStory.get('/:id', getIdNewStories);
routerNewStory.post('/:email', createNewStory);
routerNewStory.put('/:id', putNewStories);
routerNewStory.delete('/:id', deleteNewStories);

export {routerNewStory};