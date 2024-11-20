import { Request, Response, RequestHandler } from "express";
import UserExistingStory from "../models/UserExistingStory.model";

export const createUserExistingStory: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
  try {
    // const { id_user, id_existing } = req.body;
    // const userExistingStory = await UserExistingStory.create({ id_user, id_existing });
    // resp.status(201).json(userExistingStory);
  } catch (error) {
    resp.status(500).json({ message: "Error creando relación", error });
  }
};

export const getAllUserExistingStories: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
  try {
    const userExistingStories = await UserExistingStory.findAll();
    resp.status(200).json(userExistingStories);
  } catch (error) {
    resp.status(500).json({ message: "Error obteniendo relaciones", error });
  }
};
