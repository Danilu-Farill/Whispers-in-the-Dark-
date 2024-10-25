// import { useNavigate } from "react-router-dom";
// import { IStory } from "../types/Register.interface";

export const usePrincipalConnection = () => {
  const pricipalStories = async () => {
    try {
        console.log("fetch");
      const response = await fetch("http://localhost:4000/home/story/", {
        method: "GET",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(title),
      });
      if(!response.ok) {
        const errorData = await response.json();
        console.log("🚀 ~ pricipalUser ~ response:", errorData)
        throw new Error(errorData.message);
      }
      const data = await response.json();
      // console.log("🚀 ~ registerConnection ~ data:", data)
      // localStorage.setItem("title", data.title);
      // localStorage.setItem("description", data.description);
      // localStorage.setItem("username", data.imagenUrl);
      // localStorage.setItem("username", data.category);
      //la navegación va en dirección de ver todo y al escoger las tarjetas
      return data;
    }
    catch (error) {
      console.error("Error al registrar al usuario", error);
    }
}
    return { pricipalStories };
}