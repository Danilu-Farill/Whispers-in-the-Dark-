// import { useNavigate } from "react-router-dom";
// import { IStory } from "../types/Register.interface";

export const useSearchConnection = () => {
    // const navigate = useNavigate();
  const searchStory = async (title: string) => {
    try {
      const response = await fetch(`http://localhost:4000/home/story/${title}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({title}),
      });
      if(!response.ok) {
        const errorData = await response.json();
        console.log("🚀 ~ searchStory ~ response:", errorData)
        throw new Error(errorData.message);
      }
      const data = await response.json();
      console.log("🚀 ~ registerConnection ~ data:", data)
      return data;
    //   localStorage.setItem("username", data.title);
      //la navegación va enfocada en el botón atrás o cuando seleccionas una tarjeta
    //   navigate("/category");//navigate to categoryel botón de atras debe dar hacia categoria
    }
    catch (error) {
      console.error("Error al registrar al usuario", error);
      return [];
    }
}
    return { searchStory };
}