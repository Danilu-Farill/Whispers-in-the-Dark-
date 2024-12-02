export const useSearchConnection = () => {
  const searchStory = async(title: string) => {
    try {
      let url = `https://whispers-in-the-dark.onrender.com/home/story/`;
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
      return data;
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error inesperado";
      throw new Error(errorMessage);
      // return [];
    }
  };
  return { searchStory };
};

