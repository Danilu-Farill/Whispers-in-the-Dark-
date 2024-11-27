import express, { Router} from 'express';
import cors from 'cors';
import { loginUser } from '../controller/auth.controller';

const routerAuth: Router = express.Router();

routerAuth.use(cors());
routerAuth.post('/', loginUser);

export {routerAuth};
