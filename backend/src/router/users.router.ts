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
