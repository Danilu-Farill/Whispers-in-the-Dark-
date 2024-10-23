import { Request, Response, RequestHandler } from "express";
import NewStory from "../models/newStorys.model";
import User from "../models/users.model";
import { where } from "sequelize";
import { title } from "process";

export const createNewStory: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
    try {//email params para que se cree en base al email del usuario
        const { email } = req.params;
        const { title, description, imageUrl, category } = req.body;
        if (!title || !description || !imageUrl || !category) {
            return resp.status(400).json("Todos los campos son obligatorios");
        }
        const findEmailUser = await User.findOne({ where: {email:email}});
        if (!findEmailUser) {
            return resp.status(404).json("No se encontró usuario con el email");
        }
        const id_user = findEmailUser.id_user; // Obten el id_user

        const existingTitle = await NewStory.findOne({ where: { title } });   
        if (existingTitle) {
            return resp.status(400).json("Título de la historia ya existe");  
        }
        const story = await NewStory.create({title, description, imageUrl, category, id_user});
        resp.status(201).json({ message: "Historia creada con éxito"});
    } catch (error) {
        console.log("🚀 ~ constcreateNewStory:RequestHandler=async ~ error:", error)
        resp.status(500).json("Error del servidor")    
    }
};

export const getNewStories = async (req:Request, resp:Response): Promise<any> => {
    try {
        const newStories = await NewStory.findAll();
        return resp.status(200).json({ message: "Todas las historias mas recientes", newStories });
    } catch (error) {
        return resp.status(500).json("Error del servidor");
    }
}

export const getIdNewStories = async (req:Request, resp:Response): Promise<any> => {//buscar por id de la historia
    try {//buscar por categoria
        return resp.status(200).json({ message: "Historias mas recientes"});        
    } catch (error) {
        return resp.status(500).json("Error del servidor");
    }
}

export const getNewStoryCategory = async (req:Request, resp:Response): Promise<any> => {//buscar por category en query
    try {//buscar por categoria
        const { category } = req.query;
        const {email} = req.params;
        if (!category) {
            return resp.status(400).json({ message: "Falta el parámetro de consulta" });
          }
        const findEmailUser = await User.findOne({ where: {email:email}});
        if (!findEmailUser) {
            return resp.status(404).json("No se encontró el email");
        }
        const id_user = findEmailUser.id_user; // Obten el id_user
        console.log("hola2");
        
        console.log("id_user:", id_user);
        console.log("email:", email);
        console.log("category:", category);
        const findNewStoryCategory = await NewStory.findAll({where: {id_user, category: category}})
        console.log("hola3");
        
        if (!findNewStoryCategory.length) {
            console.log("hola1");
            return resp.status(404).json({ message: "No se encontraron historias con la categoría especificada" });
          }  
          console.log("hola4");
        return resp.status(200).json({ message: "Historias mas recientes", findNewStoryCategory});        
    } catch (error) {
        return resp.status(500).json("Error del servidor");
    }
}

export const getNewStoryOrder = async (req:Request, resp:Response): Promise<any> => {//buscar por category en query
    try {//buscar por categoria
        const findOrder = await NewStory.findAll({
            order: [
                ['title', 'ASC'],
                // ['category', 'DESC'],
            ]
        })
        return resp.status(200).json({ message: "Historias ordenadas", findOrder});        
    } catch (error) {
        return resp.status(500).json("Error del servidor");
    }
}


export const putNewStories = async (req:Request, resp:Response): Promise<any> => {
    try {
        return resp.status(200).json({ message: "Historias mas recientes"});        
    } catch (error) {
        return resp.status(500).json("Error del servidor");
    }
}

export const deleteNewStories = async (req:Request, resp:Response): Promise<any> => {
    try {
        return resp.status(200).json({ message: "Historias mas recientes"});        
    } catch (error) {
        return resp.status(500).json("Error del servidor");
    }
}

//buscar por categoria

//crear una vista para que el usuario pueda crear su historia, debe llevar titulo, descripcion, imagen generada, categoriade las existentes