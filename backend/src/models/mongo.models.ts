// import mongoose, { Schema, Document } from 'mongoose';
// import { IStory } from '../interface/interface';

// const StorySchema: Schema = new Schema({
//   newStoryId: { type:String, required: true, unique: true},
//   title: { type: String, required: true, trim: true },
//   content: { type: String, required: true, trim: true },
//   createdAt: { type: Date, default: Date.now },
//   category: { type: String, enum: ['terror', 'suspense', 'misterio'] },
//   imageUrl: { type: String },  // Podrías almacenar la URL de la imagen generada con Cloudinary
//   userId: { type: Schema.Types.ObjectId, ref: 'User' },  // Relación con la colección de usuarios
// });

// StorySchema.set('toJSON', {
//   virtuals: true,
//   versionKey: false,
//   transform: (doc, ret) => {
//     delete ret._id;
//   },
// });

// export const Story = mongoose.model<IStory>('Story', StorySchema);




// import mongoose, { Schema, Document } from 'mongoose';
// import { IExistingStory } from '../interface/interface';

// const ExistingStorySchema: Schema = new Schema({
//   storyId: { type: String, required: true, unique: true },
//   title: { type: String, required: true, trim: true },
//   content: { type: String, required: true, trim: true },
//   author: { type: String, required: true, trim: true },
//   category: { type: String, enum: ['terror', 'suspense', 'misterio'] },
//   createdAt: { type: Date, required: true },
// });

// ExistingStorySchema.set('toJSON', {
//   virtuals: true,
//   versionKey: false,
//   transform: (doc, ret) => {
//     delete ret._id;
//   },
// });

// export const ExistingStory = mongoose.model<IExistingStory>('ExistingStory', ExistingStorySchema);




// import mongoose, { Schema, Document } from 'mongoose';
// import { IUser } from '../interface/interface';

// const UserSchema: Schema = new Schema({
//   userId: { type: String, required: true, unique: true },
//   username: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
// });

// UserSchema.set('toJSON', {
//   virtuals: true,
//   versionKey: false,
//   transform: (doc, ret) => {
//     delete ret._id;
//   },
// });

// export const User = mongoose.model<IUser>('User', UserSchema);




//EXAMPLE TABLAS


// CREATE TABLE users (
//     id_user integer PRIMARY KEY,
//     username varchar,
//     email varchar,
//     password varchar
//   );
  
//   CREATE TABLE new_stories (
//     id_new integer PRIMARY KEY,
//     title varchar,
//     description varchar,
//     image varchar,
//     category category_type,
//     id_user integer REFERENCES users(id_user)
//   );
  
//   CREATE TABLE existing_stories (
//     id_existing integer PRIMARY KEY,
//     title varchar,
//     description varchar,
//     image varchar,
//     category category_type
//   );
  
//   CREATE TABLE user_existing_stories (
//     id_user integer REFERENCES users(id_user),
//     id_existing integer REFERENCES existing_stories(id_existing),
//     PRIMARY KEY (id_user, id_existing)
//   );






//con mongo
// import { Router } from 'express';
// import { getAllStories, createStory, getStoryById, updateStory, deleteStory } from '../controller/stories.controller';

// const routerUsers = Router();

// routerUsers.get('/', getAllStories);            // GET: /api/stories
// routerUsers.post('/', createStory);             // POST: /api/stories
// routerUsers.get('/:id', getStoryById);          // GET: /api/stories/:id
// routerUsers.put('/:id', updateStory);           // PUT: /api/stories/:id
// routerUsers.delete('/:id', deleteStory);        // DELETE: /api/stories/:id

// export {routerUsers};