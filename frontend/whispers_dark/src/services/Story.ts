export const useGeminiConnection = () => {
  const newStoryApi = async(id: number) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`localhost:4000/home/api/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
      });
      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      console.log("🚀 ~ newStoryApi ~ data:", data);
      return data;
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error inesperado";
      throw new Error(errorMessage);
      // return [];
    }
  };
  return { newStoryApi };
};