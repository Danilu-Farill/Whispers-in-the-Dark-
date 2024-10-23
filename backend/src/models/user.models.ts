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
