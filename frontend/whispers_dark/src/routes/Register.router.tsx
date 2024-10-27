import { useNavigate } from "react-router-dom";
import { IUser } from "../types/Register.interface";

export const useRegisterConnection = () => {
<<<<<<< HEAD
  // const apiUrl ="http://localhost:4000";
  const apiUrl = process.env.REACT_APP_API_URL;
  // const apiUrl = "https://whispers-in-the-dark-phi.vercel.app";
  const navigate = useNavigate();
  const registerUser = async ({email, password}: IUser) => {
    try {
      const response = await fetch(`${apiUrl}/home/users/create`, {
        method: "POST",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });
      if(!response.ok) {
        const errorData = await response.json();
        console.log("🚀 ~ registerUser ~ response:", errorData)
        throw new Error(errorData.message);
      }
=======
  // const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const registerUser = async ({email, password}: IUser) => {
    try {
      const response = await fetch(`http://localhost:4000/home/users/create`, {
        method: "POST",
          // mode: 'cors',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email, password}),
        });
        if(!response.ok) {
          const errorData = await response.json();
          console.log("🚀 ~ registerUser ~ response:", errorData)
          throw new Error(errorData.message);
        }
>>>>>>> dataBase
      const data = await response.json();
      console.log("🚀 ~ registerConnection ~ data:", data)
      console.log("🚀 ~ registerConnection ~ data:email", data.email)
      console.log("🚀 ~ registerConnection ~ data:password", data.password)
      localStorage.setItem("username", data.email);
      localStorage.setItem("description", data.password);
      navigate("/principal");
    }
    catch (error) {
      console.error("Error al registrar al usuario", error);
    }
}
    return { registerUser };
}