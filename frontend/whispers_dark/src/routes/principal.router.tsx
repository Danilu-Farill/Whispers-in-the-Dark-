export const usePrincipalConnection = () => {
  // const apiUrl = process.env.REACT_APP_API_URL;
  const pricipalStories = async () => {
    // const apiUrl ="http://localhost:4000";
    // const apiUrl = "https://whispers-in-the-dark-phi.vercel.app";
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
<<<<<<< HEAD
      const response = await fetch(`${apiUrl}/home/story`, {
        method: "GET",
        mode: 'cors',
=======
      const response = await fetch(`http://localhost:4000/home/story`, {
        method: "GET",
        // mode: 'cors',
>>>>>>> dataBase
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(!response.ok) {
        const errorData = await response.json();
        console.log("🚀 ~ pricipalUser ~ response:", errorData)
        throw new Error(errorData.message);
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.error("Error al registrar al usuario", error);
    }
}
    return { pricipalStories };
}