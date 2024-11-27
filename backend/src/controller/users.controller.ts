import { Request, Response, RequestHandler } from "express";
import { createUser, destroyUser, findEmail, findId, findUsers, updateId } from "../service/users.service";

export const registerUser: RequestHandler = async(req: Request, resp: Response): Promise<any> => {
  try {
    const { password, email } = req.body;
    const user = await createUser(email, password); 
    return resp.status(201).json(user);
  } catch (error) {
    // Si el error tiene un mensaje, lo enviamos al cliente
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    resp.status(500).json("Error del servidor");
  }
};

export const getAllUsers: RequestHandler = async(req: Request, resp: Response): Promise<any> => {
  try {
    const user = await findUsers();
    return resp.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    return resp.status(500).json("Error del servidor");
  }
};

export const getEmailUser: RequestHandler = async(req: Request, resp: Response): Promise<any> => {
  try {
    const email = req.params.email;
    const findUser = await findEmail(email);
    return resp.status(200).json(findUser);
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    return resp.status(500).json("Error del servidor");
  }
};
export const getIdUser: RequestHandler = async(req: Request, resp: Response): Promise<any> => {
  try {
    const id = req.params.id_user;
    if (!id) {//FALTA CONDICIONAL EN CASO DE QUE NO EXISTA EL ID
      return resp.status(400).json("El id es obligatorio");
    }
    const idNumber = parseInt(id, 10);
    const findUser = await findId(idNumber);
    if (!findUser) {
      return resp.status(404).json("Usuario no encontrado");
    }
    resp.status(200).json(findUser);
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    return resp.status(500).json("Error del servidor");
  }
};

export const putUser: RequestHandler = async(req: Request, resp: Response): Promise<any> => {
  try {   
    // const email = req.params.email;
    // const { password } = req.body;
    // const updateUser = await updateEmail(email, password)
    const id = req.params.id_user;
    if(!id) {
      return resp.status(400).json({ message: "El id es obligatorio" });
    }
    const idNumber = parseInt(id, 10);
    const { password, email } = req.body;
    const updateUser = await updateId(idNumber, password, email)
    resp.status(200).json({ message: "user update", updateUser});
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    resp.status(500).json({ message: "Error del servidor", error });
  }
};

export const deleteUser: RequestHandler = async(req: Request, resp: Response): Promise<any> => {
  try {
    const email = req.params.email;
    const user = await destroyUser(email);
    if (!user) {
      return resp.status(404).json({ message: "Usuario no encontrado" });
    }
    resp.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    resp.status(500).json("Error del servidor");
  }
};
