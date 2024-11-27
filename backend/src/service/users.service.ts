import User from "../models/users.model";
import * as bcrypt from 'bcryptjs';

const createHashValue = async(value: string): Promise<string> => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hashSync(value, salt);
};

const validatePassword = (password: string) =>{
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;  
  if (!regexPassword.test(password)) {
    throw new Error('Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.');
  }
};

const validateEmail = (email: string) =>{
    const regexEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
  if (!regexEmail.test(email)) {
    throw new Error('Correo electrónico inválido');
  }
};

export const findUsers = async() => {
  const user = await User.findAll();
  if (!user) {
    throw new Error('No hay usuarios registrados');
  }
  return user;
};

export const findEmail = async(email:string) => {
  const findUser = await User.findOne({ where: { email: email } });
  // return !!findUser;//TRUE SI EL USUARIO EXISTE , FALSE SI EL USUARIO NO EXISTE
  // if(findUser) {
  //   throw new Error('Usuario encontrado, no puedes usar este email');
  // }
  // return null;
  return findUser;
};

export const findId = async(id: number) => {
    const user = await User.findByPk(id);
    if(!user) {
        throw new Error('Usuario no encontrado');
    }
    return user;
};

export const createUser = async(email: string, password:string) => {
  const existingEmail = await findEmail(email);
  if (existingEmail) {
    throw new Error('El correo electrónico ya está en uso');
  }
  validateEmail(email);
  validatePassword(password);
  const pswHash = await createHashValue(password);
  const user = await User.create({ email, password: pswHash });
  return user;
};

export const updateEmail = async(email: string, newPassword?: string, newEmail?:string) => {
    const findUser = await findEmail(email);   
    if (!findUser) {
      throw new Error('Usuario no encontrado');
    }
    const fields: {password?: string, email?: string} = {};//SE INICIALIZA VACIO Y POSTERIOR SE AGREGARA EL VALOR QUE NECESITE ACTUALIZAR
    if (newPassword) {
      validatePassword(newPassword);
      fields.password = await createHashValue(newPassword);
    }
    if (newEmail) fields.email = newEmail;
    const updateUser = await User.update(fields, { where: { email } })
    return updateUser;
};

export const updateId = async(id_user:number, newPassword?: string, newEmail?:string) => {
    const findUser = await findId(id_user);   
    if (!findUser) {
      throw new Error('Usuario no encontrado');
    }
    const fields: {password?: string, email?: string} = {};//SE INICIALIZA VACIO Y POSTERIOR SE AGREGARA EL VALOR QUE NECESITE ACTUALIZAR
    if (newPassword) {
      validatePassword(newPassword);
      fields.password = await createHashValue(newPassword);
    }
    if (newEmail) fields.email = newEmail;
    const updateUser = await User.update(fields, { where: { id_user } })
    return updateUser;
};

export const destroyUser = async(email: string) => {
    const findUser = await findEmail(email);
    if (!findUser) {
      throw new Error('Usuario no encontrado');
    }
    const user = await User.destroy({ where: { email } });
    return user;
};




// export const putId = async() => {
//   try {
//     const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     const email = req.params.email;
//     const { password, description, username } = req.body;
//     const findUser = await User.findOne({ where: { email: email } });
//     if (!findUser) {
//       return resp.status(404).json("Usuario no encontrado");
//     }
//     if (!regexPassword.test(password)) {
//       return resp.status(400).json("Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
//     }
//     const psw = await createHashValue(password);
//     const updateUser = await User.update(
//       { password: psw, description, username },
//       { where: { email: email } },
//     );
//     console.log("🚀 ~ constputUser:RequestHandler=async ~ updateUser:", updateUser);
//     resp.status(200).json({ message: "user update", psw, username, description });
//   } catch (error) {
//     resp.status(500).json({ message: "Error del servidor", error });
//   }
// };



// try {
//     const id = req.params.id_user;
//     if (!id) {
//       return resp.status(400).json("El id es obligatorio");
//     }
//     const idNumber = parseInt(id, 10);
//     const findUser = await getId(idNumber);
//     resp.status(200).json(findUser?.toJSON());//toJSON PARA EVITAR METADATOS ADICIONALES DE SEQUELITE
//   } catch (error) {
//     console.log("🚀 ~ constgetIdUser:RequestHandler=async ~ error:", error);
//     resp.status(500).json("Error del servidor");
//   }