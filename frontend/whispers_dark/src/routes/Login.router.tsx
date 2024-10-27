import { useNavigate } from "react-router-dom";
import { IUser } from "../types/Register.interface";

export const useLoginConnection = () => {
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
      navigate("/principal");
    }
    catch (error) {
      console.error("Error al registrar al usuario", error);
    }
}
    return { loginUser };
}