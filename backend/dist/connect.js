"use strict";
// import mongoose from 'mongoose';
const mongoURI = process.env.DB_URL;
if (!mongoURI) {
    throw new Error('DB_URL no está definido');
}
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Connection error', err));
