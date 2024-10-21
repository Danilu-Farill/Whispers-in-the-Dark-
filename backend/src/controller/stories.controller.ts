// controllers/story.controller.ts

import { Request, Response } from 'express';
import { StoryService } from '../service/index.service';

const storyService = new StoryService();

// Obtener todas las historias
export const getAllStories = async (req: Request, res: Response): Promise<void> => {
  try {
    const stories = await storyService.getAllStories();
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las historias' });
  }
};

// Crear una nueva historia
export const createStory = async (req: Request, res: Response): Promise<void> => {
  try {
    const story = await storyService.createStory(req.body);
    res.status(201).json(story);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la historia' });
  }
};

// Obtener historia por ID
export const getStoryById = async (req: Request, res: Response): Promise<void> => {
  try {
    const story = await storyService.getStoryById(req.params.id);
    if (!story) {
      res.status(404).json({ message: 'Historia no encontrada' });
      return;
    }
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la historia' });
  }
};

// Actualizar historia
export const updateStory = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedStory = await storyService.updateStory(req.params.id, req.body);
    if (!updatedStory) {
      res.status(404).json({ message: 'Historia no encontrada' });
      return;
    }
    res.status(200).json(updatedStory);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la historia' });
  }
};

// Eliminar historia
export const deleteStory = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedStory = await storyService.deleteStory(req.params.id);
    if (!deletedStory) {
      res.status(404).json({ message: 'Historia no encontrada' });
      return;
    }
    res.status(200).json(deletedStory);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la historia' });
  }
};
