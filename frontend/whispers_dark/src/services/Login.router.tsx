import { useNavigate } from "react-router-dom";
import { IUser } from "../types/Register.interface";

export const useLoginConnection = () => {
  const navigate = useNavigate();
  const loginUser = async({email, password}: IUser) => {
    try {
      const response = await fetch(`https://whispers-in-the-dark.onrender.com/home/auth/`, {
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
        throw new Error(errorData.message);
      }
      const data = await response.json();
      const token = data.tokenUser;
      localStorage.setItem("username", data.email);
      localStorage.setItem("token", token);
      navigate("/principal");
    }
    catch (error) {
      const errorMessage = error instanceof Error? error.message : "Error inesperado";
      throw new Error(errorMessage);
    }
  };
  return { loginUser };
};