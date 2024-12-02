import { Request, Response, RequestHandler } from "express";
import { findStory, findStoryOrder, findGetTitle, findStoryCategory, findCategory, createStory, findIdStory, updateStory, removeStory } from "../service/existings.service";

export const getNewStoryOrder = async( req: Request, resp: Response): Promise<any> => {
  try {//QUERY ?ORDER=DESC
    const order = req.query.order?.toString().toUpperCase() as "ASC" | "DESC" || "ASC";
    if(order !== "ASC" && order !== "DESC"){
      return resp.status(400).json("El orden solo puede ser ASC o DESC");
    }
    const findOrder = await findStoryOrder(order);
    return resp.status(200).json({ message: "Historias ordenadas", findOrder });
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    return resp.status(500).json("Error del servidor");
  }
};//OBTIENE LAS HISTORIAS EN ORDEN DESC ALFABETO

export const getAllStoryExisting: RequestHandler = async(req: Request, resp: Response): Promise<any> => {
  try {
    const story = await findStory();
    resp.status(200).json(story);
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    resp.status(500).json("Error del servidor");
  }
};//OBTIENE TODAS LAS HISTORIAS 

export const getAllCategory: RequestHandler = async(req: Request, resp: Response): Promise<any> => {
  try {
    const story = await findCategory();
    resp.status(200).json(story);
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    resp.status(500).json("Error del servidor");
  }
};//OBTIENE TODAS LAS CATEGORIAS PARA MI VISTA PRINCIPAL

export const getTitle = async(req: Request, resp: Response): Promise<any> => {
  try {
    const { title } = req.params;
    const findTitle = await findGetTitle(title);
    return resp.status(200).json(findTitle);
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    resp.status(500).json("Error del servidor");
  }
};//BUSCA POR EL TITULO DE LAS HISTORAS PARA MI SEARCH 

export const getStoryCategory = async(req: Request, resp: Response): Promise<any> => {
  try {
    const { category } = req.params;
    if(!category){
      return resp.status(400).json("Categoria es requerida");
    }
    const findNewStoryCategory = await findStoryCategory(category);
    return resp.status(200).json({ message: "Historias encontradas", category: findNewStoryCategory});
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    return resp.status(500).json("Error del servidor");
  }
};//BUSCA POR CATEGORIA

export const registerStory: RequestHandler = async(req: Request, resp: Response): Promise<any> => {
  try {
    const { title, description, imageUrl, category } = req.body;
    const story = await createStory(title, description, imageUrl, category);
    return resp.status(201).json({ message: "Historia creada con éxito", story });
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    return resp.status(500).json("Error del servidor");
  }
};// CREAR UNA HISTORIA

export const getIdUser: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
    try {
        const id = req.params.id_existing;
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

export const putStory: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
  try {
    const {id_existing} = req.params;
    if(!id_existing){
      return resp.status(400).json("Id es requerido");
    }
    const idNumber = parseInt(id_existing, 10);
    const { title, description, imageUrl, category } = req.body;
    const updateUser = await updateStory(idNumber, title, description, imageUrl, category);
    resp.status(200).json({message: "user update", updateUser});
  } catch (error) {
    resp.status(500).json({message: "Error del servidor", error});
  }
};

export const deleteStory: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
    try {
      const id = req.params.id_existing;
      if(!id){
        return resp.status(400).json("Id es requerido");
      }
      const idNumber = parseInt(id, 10);
        const user = await removeStory(idNumber);
       return resp.status(200).json({message: "Usuario eliminado"});
    } catch (error) {
      if (error instanceof Error) {
        return resp.status(400).json({ message: error.message });
      }
      return resp.status(500).json("Error del servidor")
    }
}
