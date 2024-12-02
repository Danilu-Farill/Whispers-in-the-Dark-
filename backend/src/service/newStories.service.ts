import StoryExisting from "../models/existingStory";
import NewStory from "../models/newStorys.model";
import { findTitle } from "./existings.service";
import { findId } from "./users.service";

export const createNewStory = async(id_user: number, title: string, description: string, imageUrl: string, category: string) => {
  await findId(id_user);
  if (!title || !description || !imageUrl || !category) {
    throw new Error ("Todos los campos son obligatorios");
  }
  const existingTitle = await findTitle(title);
  if (existingTitle) {
    throw new Error("Título de la historia ya existe");
  }
  const newStory = await NewStory.create({id_user ,title, description, imageUrl, category});
  await StoryExisting.create({title, description, imageUrl, category});
  return newStory;
};
//ESTA HISTORIA DEBERIA CREARSE CON IA O DEBERIA PODER CREARLA EL USUARIO?
//CREADA POR LA INTELIGENCIA UN SOLO ENDPOINT PARA CREAR, ESTA HISTORIA SE DEBE GUARDAR EN LAS HISTORIAS EXISTENTES
//SI EL USUARIO LA PUEDE CREAR DEBE PODER ACTUALIZAR SU HISTORIA PERO NO BORRARLA ESO LO DEBO PODER HACER DE LAS DE HISTORIAS EXISTENTES

export const findNewStories = async(): Promise<any> => {
  const newStories = await NewStory.findAll();
  if(!newStories){
    throw new Error("No hay historias disponibles");
  }
  return newStories;
};

export const findIdStory = async(id: number) => {
    const findId = await NewStory.findByPk(id);
    if(!findId){
      throw new Error("No hay historias para este usuario");
    }
    return findId;
}

export const updateNewStory = async(id: number, title: string, description: string, imageUrl: string, category: string) => {
  const findUser = await findIdStory(id);
  if (!findUser) {
    throw new Error("Historia no encontrada");
  }
  const updateUser = await NewStory.update({title, description, imageUrl, category}, {where:{id_newStory: id}});
  return updateUser;
};

export const removeNewStory = async( id: number) => {
  const user = await findIdStory(id);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  const deleteStory = await StoryExisting.destroy({where:{id_newStory: id}});
  return deleteStory;
}