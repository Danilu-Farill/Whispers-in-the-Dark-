import express, { Router } from 'express';
import { registerStory, getAllStoryExisting, getNewStoryOrder, getStoryCategory, putStory, getTitle, getAllCategory, getIdUser, deleteStory } from '../controller/existings.controller';

const routerExisting: Router = express.Router();

routerExisting.get('/', getAllStoryExisting);//TODAS LAS HISTORIAS
routerExisting.get('/category', getAllCategory);//TODAS LAS CATEGORIAS
routerExisting.get('/:id_user', getIdUser);//USUARIO POR ID
routerExisting.get('/category/:category', getStoryCategory);//CLASIFICAR POR CATEGORIA
routerExisting.get('/title/:title', getTitle);//POR TITULO
routerExisting.post('/', registerStory);//CREAR HISTORIAS
routerExisting.put('/:id_existing', putStory);
routerExisting.delete('/:id_existing', deleteStory);
routerExisting.get('/sort/desc', getNewStoryOrder)//CATEGORIAS POR ORDEN 

export { routerExisting };