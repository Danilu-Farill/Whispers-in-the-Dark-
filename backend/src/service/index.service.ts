// import Story from "../models/newStorys.model";
// import { IStory } from "../interface/interface";

// export class StoryService {
  
//   // Obtener todas las historias
//   async getAllStories(): Promise<IStory[]> {
//     return Story.find();
//   }
// }

//   // Crear una nueva historia
//   async createStory(storyData: Partial<IStory>): Promise<IStory> {
//     const newStory = new Story(storyData);
//     return newStory.save();
//   }

//   // Obtener una historia por ID
//   async getStoryById(storyId: string): Promise<IStory | null> {
//     return NewStory.findById(storyId);
//   }

//   // Actualizar una historia
//   async updateStory(storyId: string, storyData: Partial<IStory>): Promise<IStory | null> {
//     return NewStory.findByIdAndUpdate(storyId, storyData, { new: true });
//   }

//   // Eliminar una historia
//   async deleteStory(storyId: string): Promise<IStory | null> {
//     return NewStory.findByIdAndDelete(storyId);
//   }
// }
