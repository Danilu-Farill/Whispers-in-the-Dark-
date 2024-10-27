export const usePrincipalConnection = () => {
  const pricipalStories = async () => {
    try {
      const response = await fetch(`http://localhost:4000/home/story`, {
        method: "GET",
        // mode: 'cors',
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