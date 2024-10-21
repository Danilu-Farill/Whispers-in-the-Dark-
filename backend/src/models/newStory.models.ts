import mongoose, { Schema, Document } from 'mongoose';
import { IStory } from '../interface/interface';

const StorySchema: Schema = new Schema({
  newStoryId: { type:String, required: true, unique: true},
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  category: { type: String, enum: ['terror', 'suspense', 'misterio'] },
  imageUrl: { type: String },  // Podrías almacenar la URL de la imagen generada con Cloudinary
  userId: { type: Schema.Types.ObjectId, ref: 'User' },  // Relación con la colección de usuarios
});

StorySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  },
});

export const Story = mongoose.model<IStory>('Story', StorySchema);
