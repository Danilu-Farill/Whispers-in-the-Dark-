export const usePrincipalConnection = () => {
  const pricipalStories = async() => {
    try {
      const response = await fetch(`https://whispers-in-the-dark.onrender.com/home/story`, {
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
      const errorMessage = error instanceof Error? error.message : "Error inesperado";
      throw new Error(errorMessage);
    }
  };

  const categoriesApi = async() => {
    try {
      const response = await fetch('http://localhost:4000/home/story/category', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error? error.message : "Error inesperado";
      throw new Error(errorMessage);
    }
  };

  const storiesCategoryApi = async(category: string) => {
    try {
      const response = await fetch(`http://localhost:4000/home/story/category/${category}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error? error.message : "Error inesperado";
      throw new Error(errorMessage);
    }
  };

  const storiesSortApi = async(order: string) => {
    try {
      const response = await fetch(`http://localhost:4000/home/story/sort/desc?order=${order}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error? error.message : "Error inesperado";
      throw new Error(errorMessage);
    }
  };
  return { pricipalStories, categoriesApi, storiesCategoryApi, storiesSortApi };
};