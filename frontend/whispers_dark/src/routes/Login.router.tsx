import { useNavigate } from "react-router-dom";
import { IUser } from "../types/Register.interface";

export const useLoginConnection = () => {
  // localStorage.setItem("token", tokenDelUsuario);
  // const token = localStorage.getItem("token");
  // const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const loginUser = async ({email, password}: IUser) => {
    try {
      const response = await fetch(`http://localhost:4000/home/users/login`, {
        method: "POST",
        // mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${token}`
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


/*
const apiUrl = "https://tu-backend-en-railway.app/home/users";

// Función para hacer login y almacenar el token
function loginUser(credentials) {
  fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
  .then(response => response.json())
  .then(data => {
    if (data.token) {
      // Guarda el token en localStorage
      localStorage.setItem("token", data.token);
    }
  })
  .catch(error => console.error("Error:", error));
}

// Función para obtener usuarios con autenticación
function getUsers() {
  const token = localStorage.getItem("token");

  fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
}


*/
































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