import { Request, Response, RequestHandler } from "express";
import { createNewStory, findIdStory, findNewStories, removeNewStory, updateNewStory } from "../service/newStories.service";

export const postNewStory: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
  try {
    const { id_user } = req.params;
    if (!id_user) {
      return resp.status(400).json({ message: "El id del usuario es obligatorio" });
    };
    const idNumber: number = parseInt(id_user, 10);
    const { title, description, imageUrl, category } = req.body;
    const story = await createNewStory(idNumber, title, description, imageUrl, category);
    return resp.status(201).json({ message: "Historia creada con éxito", story});
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    return resp.status(500).json("Error del servidor");
  }
}; //EL USUARIO PUEDE CREAR LA HISTORIA Y SE AGRAGA

export const getNewStories = async(req:Request, resp:Response): Promise<any> => {
  try {
    const newStories = await findNewStories();
    return resp.status(200).json({ message: "Todas las historias mas recientes", newStories });
  } catch (error) {
    if(error instanceof Error){
      return resp.status(400).json({ message: error.message });
    }
    return resp.status(500).json("Error del servidor");
  }
};

export const getIdUser: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
  try {
      const id = req.params.id_newStory;
      if(!id){
          return resp.status(400).json("Id es requerido");
      }
      const idNumber = parseInt(id, 10);
      const findUser = await findIdStory(idNumber);
      resp.status(200).json(findUser);
  } catch (error) {
      resp.status(500).json("Error del servidor")
  }
}//buscar historias por id

export const putNewStory: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
  try {
    const {id_newStory} = req.params;
    if(!id_newStory){
      return resp.status(400).json("Id es requerido");
    }
    const idNumber = parseInt(id_newStory, 10);
    const { title, description, imageUrl, category } = req.body;
    const updateUser = await updateNewStory(idNumber, title, description, imageUrl, category);
    resp.status(200).json({message: "user update", updateUser});
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    resp.status(500).json({message: "Error del servidor", error});
  }
};

export const deleteNewStory: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
  try {
    const id = req.params.id_newStory;
    if(!id){
      return resp.status(400).json("Id es requerido");
    }
    const idNumber = parseInt(id, 10);
      const user = await removeNewStory(idNumber);
     return resp.status(200).json({message: "Usuario eliminado"});
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    return resp.status(500).json("Error del servidor")
  }
}