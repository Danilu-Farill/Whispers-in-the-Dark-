import { useNavigate } from "react-router-dom";
import { IUser } from "../types/Register.interface";

export const useLoginConnection = () => {
  const apiUrl = "https://whispers-in-the-dark-phi.vercel.app";
  // const apiUrl ="http://localhost:4000";
  const navigate = useNavigate();
  const loginUser = async ({email, password}: IUser) => {
    try {
      const response = await fetch(`${apiUrl}/home/users/login`, {
        method: "POST",
        mode: 'no-cors',
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
      navigate("/principal");
    }
    catch (error) {
      console.error("Error al registrar al usuario", error);
    }
}
    return { loginUser };
}
