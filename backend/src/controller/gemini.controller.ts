import { Request, RequestHandler, Response } from "express";
import { generateHorrorStory } from "../service/gemini.service";

export const createStoryAI: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id_user } = req.params;
    const { category } = req.body;
    if (!id_user) {
      return res.status(400).json({ message: "User ID is required" });
    };
    const idNumber = parseInt(id_user, 10);
    const story = await generateHorrorStory(idNumber, category);
    res.status(200).json({ message: "Story generated successfully", story });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Error generating story" });
  }
};
