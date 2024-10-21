import { Document } from 'mongoose';

export interface IStory extends Document {
    title: string;
    content: string;
    createdAt: Date;
    category: string;
}

export interface IUser extends Document {
  userId: string;
  username: string;
  email: string;
  password: string;
}

export interface IExistingStory extends Document {
  storyId: string;
  title: string;
  content: string;
  category: string;
  createdAt: Date;
}