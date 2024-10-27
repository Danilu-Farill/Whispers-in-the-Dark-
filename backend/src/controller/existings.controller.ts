import { Request, Response, RequestHandler } from "express";
import StoryExisting from "../models/existingStory";
import { Op } from "sequelize";

export const createStory: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
    try {
        const { title, description, imageUrl, category } = req.body;
        if (!title || !description || !imageUrl || !category) {
            return resp.status(400).json("Todos los campos son obligatorios");
        }
        const existingTitle = await StoryExisting.findOne({ where: { title } });   
        if (existingTitle) {
            return resp.status(400).json("Título de la historia ya existe");  
        }
        const story = await StoryExisting.create({title, description, imageUrl, category});
        console.log("🚀 ~ constcreateStory:RequestHandler=async ~ story:", story)
        resp.status(201).json({ message: "Historia creada con éxito"});
    } catch (error) {
        console.log("Aqui esta el error:", error); 
        resp.status(500).json("Error del servidor")    
    }
};

export const getNewStoryOrder = async (req:Request, resp:Response): Promise<any> => {//buscar por category en query
    try {//buscar por categoria
        const findOrder = await StoryExisting.findAll({
            order: [
                ['title', 'ASC'],
                ['category', 'DESC'],
            ]
        })
        return resp.status(200).json({ message: "Historias ordenadas", findOrder});        
    } catch (error) {
        console.log("🚀 ~ getNewStoryOrder ~ error:", error)
        return resp.status(500).json("Error del servidor");
    }
}

export const getAllStoryExisting: RequestHandler = async(req:Request, resp:Response): Promise<void> => {
    try {
        const story = await StoryExisting.findAll();
        resp.status(200).json(story);
    } catch (error) {
        console.log("🚀 ~ constgetAllStoryExisting:RequestHandler=async ~ error:", error)
        resp.status(500).json("Error del servidor")    
    }
};

export const getTitle = async(req:Request, resp:Response): Promise<any> => {
    try {
        const { title } = req.params;
        const findTitle = await StoryExisting.findAll({
            where: {
              title: {
                [Op.iLike]: `%${title}%`
              }
            }
          });
        console.log("🚀 ~ findTitle:", findTitle)
        if (findTitle.length === 0) {
            return resp.status(404).json("Historia no encontrada");
        }
        return resp.status(200).json(findTitle);
    } catch (error) {
        console.log("🚀 ~ getTitle ~ error:", error)
        resp.status(500).json("Error del servidor");        
    }

}

export const getStoryCategory = async (req:Request, resp:Response): Promise<any> => {
    try {//buscar por categoria
        const {category} = req.params;
        const findNewStoryCategory = await StoryExisting.findAll({where: {category: category}})
        console.log("🚀 ~ getNewStoryCategory ~ findNewStoryCategory:", findNewStoryCategory)
        return resp.status(200).json({ message: "Historias mas recientes"});        
    } catch (error) {
        console.log("🚀 ~ getStoryCategory ~ error:", error)
        return resp.status(500).json("Error del servidor");
    }
}

//VER TODO ES UN GET ALL
//FILTAR ES UN GET ID O DEPENDIENDO
//NUEVA HISTORIA ES EL OTRO CRUD
//hacer un get por categoria
//un get de ordenado alfabetico
//HACER UPDATE PARA CAMBIAR LA IMAGEN EN ID 3


// export const getIdUser: RequestHandler = async(req:Request, resp:Response): Promise<void> => {
//     try {
//         const email = req.params.email;
//         // const user = await User.findByPk(); se usa para buscar solo por id
//         const findUser = await User.findOne({where: {email: email}});
//         resp.status(200).json(findUser);
//     } catch (error) {
//         resp.status(500).json("Error del servidor")    
//     }
// }

// export const putUser: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
//     try {
//         const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         const email = req.params.email;
//         const { password, description, username } = req.body;
//         const findUser = await User.findOne({where: {email: email}});
//         if (!findUser) {
//             return resp.status(404).json("Usuario no encontrado");
//         }
//         if(!regexPassword.test(password)){
//             return resp.status(400).json("Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
//         }        
//         const psw = await createHashValue(password);
//         const updateUser = await User.update({password: psw, description, username}, {where:{email: email}});
//         resp.status(200).json({message: "user update", psw, username, description});
//     } catch (error) {
//         resp.status(500).json("Error del servidor")    
//     }
// }

// export const deleteUser: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
//     try {
//         const email = req.params.email;
//         const user = await User.destroy({where:{ email }});
//         if (!user) {
//             return resp.status(404).json({message: "Usuario no encontrado"});
//         }
//         resp.status(200).json({message: "Usuario eliminado"});
//     } catch (error) {
//         resp.status(500).json("Error del servidor")    
//     }
// }
