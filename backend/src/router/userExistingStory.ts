import express, { Router } from 'express';
import { createUserExistingStory } from '../controller/userExistingStory';

const routerUserExistingStory: Router = express.Router();

routerUserExistingStory.get('/', createUserExistingStory);

export {routerUserExistingStory};