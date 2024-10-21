import mongoose, { Schema, Document } from 'mongoose';
import { IExistingStory } from '../interface/interface';

const ExistingStorySchema: Schema = new Schema({
  storyId: { type: String, required: true, unique: true },
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  category: { type: String, enum: ['terror', 'suspense', 'misterio'] },
  createdAt: { type: Date, required: true },
});

ExistingStorySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  },
});

export const ExistingStory = mongoose.model<IExistingStory>('ExistingStory', ExistingStorySchema);