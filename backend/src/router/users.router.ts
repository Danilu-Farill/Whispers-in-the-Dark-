import express, { Router} from 'express';
import cors from 'cors';
import { registerUser, getAllUsers, getIdUser, putUser, deleteUser, getEmailUser } from '../controller/users.controller';

const routerUsers: Router = express.Router();

routerUsers.use(cors());
routerUsers.get('/', getAllUsers);
routerUsers.post('/create', registerUser);
// routerUsers.get('/:email', getEmailUser);
routerUsers.get('/:id_user', getIdUser);
// routerUsers.put('/:email', putUser);
routerUsers.put('/:id_user', putUser);
routerUsers.delete('/:email', deleteUser);

export {routerUsers};
