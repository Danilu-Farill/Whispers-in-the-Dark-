import { useNavigate } from "react-router-dom";
import { IUser } from "../types/Register.interface";

export const useLoginConnection = () => {
    const navigate = useNavigate();
  const loginUser = async ({email, password}: IUser) => {
    try {
      const response = await fetch("http://localhost:4000/home/users/login", {
        method: "POST",
        // mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });
      if(!response.ok) {
        const errorData = await response.json();
        console.log("🚀 ~ loginUser ~ response:", errorData)
        throw new Error(errorData.message);
      }
      const data = await response.json();
      console.log("🚀 ~ loginConnection ~ data:", data)
      console.log("🚀 ~ loginConnection ~ data:email", data.email)
      localStorage.setItem("username", data.email);
      // localStorage.setItem("description", data.password);
      navigate("/principal");
    }
    catch (error) {
      console.error("Error al registrar al usuario", error);
    }
}
    return { loginUser };
}

































// // En tu componente React
// import axios from 'axios';

// // Genera una imagen para la historia
//  export const generarImagen = async () => {
//   const respuesta = await axios.post('/api/generar-imagen', {
//     titulo: 'La casa embrujada',
//     descripcion: 'Una casa abandonada en el bosque',
//   });

//   const imagenUrl = respuesta.data.imagenUrl;
//   // Muestra la imagen en tu componente
//   return <img src={imagenUrl} alt="La casa embrujada" />;
// };