export const useSearchConnection = () => {
  const searchStory = async (title: string) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(`${apiUrl}/home/story/${title}`, {
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