import { Request, Response, RequestHandler } from 'express';
import User from '../models/users.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv, { config } from "dotenv";
dotenv.config();

const createHashValue = async(value:string): Promise<string> =>{
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hashSync(value, salt)
}
  
const isValidPassword = async (psw: string, encrypted: string): Promise<boolean> =>{
    return await bcrypt.compareSync(psw, encrypted);
}

export const createUser: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
    try {
        const regexEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const {password, email} = req.body;

        if (!password ||!email) {
            return resp.status(400).json("Correo electrónico y contraseña son campos obligatorios");
        }
        if (!regexEmail.test(email)) {
            return resp.status(400).json("Correo electrónico inválido");
        } 

        const existingEmail = await User.findOne({ where: { email } });   

        if(existingEmail) {
            return resp.status(400).json("Nombre de usuario o correo electrónico ya existe");
        }
        if(!regexPassword.test(password)){
            return resp.status(400).json("Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
        }
        const pswHash = await createHashValue(password); 
        const user = await User.create({ email, password: pswHash});
        resp.status(201).json(user);
    } catch (error) {
        console.log("Aqui esta el error:",error);
        
        resp.status(500).json("Error del servidor")    
    }
};

export const loginUser: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return resp.status(400).json({ message: "Correo electrónico y contraseña son obligatorios" });
        };
        const loginUser = await User.findOne({ where: { email: email}});
        if(!loginUser){
            return resp.status(404).json({ message: "Usuario no encontrado" });
        }
        let comparePsw;
        if(loginUser !== null) {    
            comparePsw = await isValidPassword(password, loginUser.password)
        }
        if(!comparePsw){
            return resp.status(401).json({ message: "Contraseña incorrecta" });
        }
        if(!process.env.JWT_SECRET){
            return resp.status(401).json({ message: "Variable de entorno JWT_SECRET no configurada" });
        }
        const token = await jwt.sign(email, process.env.JWT_SECRET);
         resp.status(200).json({message:"Usuario encontrado", token, email});       
        // resp.status(200).json({message:"Usuario encontrado", token,username:loginUser?.username, description:loginUser?.description});       
    } catch (error) {
        resp.status(500).json({ message: "Error del servidor" }); 
    }
};

export const getAllUsers: RequestHandler = async(req:Request, resp:Response): Promise<void> => {
    try {
        const user = await User.findAll();
        resp.status(200).json(user);
    } catch (error) {
        resp.status(500).json("Error del servidor")    
    }
};

export const getIdUser: RequestHandler = async(req:Request, resp:Response): Promise<void> => {
    try {
        const email = req.params.email;
        // const user = await User.findByPk(); se usa para buscar solo por id
        const findUser = await User.findOne({where: {email: email}});
        resp.status(200).json(findUser);
    } catch (error) {
        resp.status(500).json("Error del servidor")    
    }
}

export const putUser: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
    try {
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const email = req.params.email;
        const { password, description, username } = req.body;
        const findUser = await User.findOne({where: {email: email}});
        if (!findUser) {
            return resp.status(404).json("Usuario no encontrado");
        }
        if(!regexPassword.test(password)){
            return resp.status(400).json("Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
        }        
        const psw = await createHashValue(password);
        const updateUser = await User.update({password: psw, description, username}, {where:{email: email}});
        resp.status(200).json({message: "user update", psw, username, description});
    } catch (error) {
        resp.status(500).json("Error del servidor")    
    }
}

export const deleteUser: RequestHandler = async(req:Request, resp:Response): Promise<any> => {
    try {
        const email = req.params.email;
        const user = await User.destroy({where:{ email }});
        if (!user) {
            return resp.status(404).json({message: "Usuario no encontrado"});
        }
        resp.status(200).json({message: "Usuario eliminado"});
    } catch (error) {
        resp.status(500).json("Error del servidor")    
    }
}
