import * as bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { findEmail } from "./users.service";
dotenv.config();

const isValidPassword = (psw: string, encrypted: string): boolean => {
  return bcrypt.compareSync(psw, encrypted);
};

export const tokenUser = async(email: string, password: string) => {
    if (!email || !password) {
        throw new Error ("Correo electrónico y contraseña son obligatorios");
    }
    const loginUser = await findEmail(email);
    // console.log("🚀 ~ tokenUser ~ loginUser:", loginUser.toJSON());
    if (!loginUser) {
      throw new Error ("Usuario no encontrado");
    }
      let comparePsw;
      if (loginUser !== null) {
        comparePsw = isValidPassword(password, loginUser.password);
      }
      if (!comparePsw) {
        throw new Error ("Contraseña incorrecta");
      }
      if (!process.env.JWT_SECRET) {
        throw new Error ("Variable de entorno JWT_SECRET no configurada");
      }
      const token = jwt.sign({id: loginUser.id_user}, process.env.JWT_SECRET);
      return token;
};

