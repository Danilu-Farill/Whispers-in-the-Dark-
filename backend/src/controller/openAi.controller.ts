import { Request, RequestHandler, Response } from "express";
import { generateHorrorStory } from "../config/openai.config";

export const generateStory: RequestHandler = async(req: Request, res: Response): Promise<any> => {
  try {
    const { prompt } = req.body;  // El usuario puede enviar un tema o palabra clave
    if (!prompt) {
      return res.status(400).json({ message: "Por favor ingresa una categoria para la historia." });
    }
    // Realizar la solicitud a OpenAI
    const story = await generateHorrorStory(prompt);
    res.status(200).json({title: story.title, description: story.description, category: story.category});  // Historia generada
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Error generando la historia."});
  }
};

