import { Request, Response, RequestHandler } from "express";
import { tokenUser } from "../service/auth.service";

export const loginUser: RequestHandler = async(req: Request, resp: Response): Promise<any> => {
  try {
    const {email, password } = req.body;
    const token = await tokenUser(email, password)
    resp.status(200).json({ message: "Usuario encontrado", token, email });
    // resp.status(200).json({message:"Usuario encontrado", token,username:loginUser?.username});
  } catch (error) {
    if (error instanceof Error) {
      return resp.status(400).json({ message: error.message });
    }
    resp.status(500).json({ message: "Error del servidor" });
  }
};