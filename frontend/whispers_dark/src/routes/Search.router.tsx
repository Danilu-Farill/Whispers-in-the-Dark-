export const useSearchConnection = () => {
  const searchStory = async (title: string) => {
    try {
      const response = await fetch(`http://localhost:4000/home/story/${title}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
}