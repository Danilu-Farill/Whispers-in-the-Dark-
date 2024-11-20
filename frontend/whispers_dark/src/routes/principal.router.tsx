export const usePrincipalConnection = () => {
  const pricipalStories = async() => {
    try {
      const response = await fetch(`https://whispers-in-the-dark.onrender.com/home/story`, {
        method: "GET",
        // mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(!response.ok) {
        const errorData = await response.json();
        console.log("🚀 ~ pricipalUser ~ response:", errorData);
        throw new Error(errorData.message);
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.error("Error al registrar al usuario", error);
    }
  };
  return { pricipalStories };
};