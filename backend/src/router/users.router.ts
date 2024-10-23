import express, { Router} from 'express';
import { createUser, getAllUsers, getIdUser, putUser, deleteUser, loginUser } from '../controller/users.controller';

const routerUsers: Router = express.Router();

routerUsers.get('/', getAllUsers);
routerUsers.post('/create', createUser);
routerUsers.post('/login', loginUser);
routerUsers.get('/:email', getIdUser);
routerUsers.put('/:email', putUser);
routerUsers.delete('/:email', deleteUser);

export {routerUsers};

















//con mongo
// import { Router } from 'express';
// import { getAllStories, createStory, getStoryById, updateStory, deleteStory } from '../controller/stories.controller';

// const routerUsers = Router();

// routerUsers.get('/', getAllStories);            // GET: /api/stories
// routerUsers.post('/', createStory);             // POST: /api/stories
// routerUsers.get('/:id', getStoryById);          // GET: /api/stories/:id
// routerUsers.put('/:id', updateStory);           // PUT: /api/stories/:id
// routerUsers.delete('/:id', deleteStory);        // DELETE: /api/stories/:id

// export {routerUsers};
