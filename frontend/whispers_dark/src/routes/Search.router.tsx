export const useSearchConnection = () => {
  const searchStory = async(title: string) => {
    try {
      let url = `https://whispers-in-the-dark.onrender.com/home/story`;
      if (title !== "") {
        url += `title/${title}`;
      }
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      console.log("🚀 ~ registerConnection ~ data:", data);
      return data;
    }
    catch (error) {
      console.error("Error al registrar al usuario", error);
      return [];
    }
  };
  return { searchStory };
};

