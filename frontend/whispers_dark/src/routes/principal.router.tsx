export const usePrincipalConnection = () => {
  const pricipalStories = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      console.log("fetch");
      const response = await fetch(`${apiUrl}/home/story/`, {
        method: "GET",
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