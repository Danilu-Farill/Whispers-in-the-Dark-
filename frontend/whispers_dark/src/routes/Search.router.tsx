// import { useNavigate } from "react-router-dom";
// import { IStory } from "../types/Register.interface";

export const useSearchConnection = () => {
  // const apiUrl = process.env.REACT_APP_API_URL;
  const searchStory = async (title: string) => {
    try {
      let url = `http://localhost:4000/home/story/`;
      if (title !== "") {
        url += `title/${title}`; 
      }
      //const response = await fetch(`http://localhost:4000/home/story/title/${title}`, {
        const response = await fetch(url, {
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
    }
    catch (error) {
      console.error("Error al registrar al usuario", error);
      return [];
    }
}
    return { searchStory };
};