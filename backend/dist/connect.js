"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoURI = process.env.DB_URL;
if (!mongoURI) {
    throw new Error('DB_URL no está definido');
}
mongoose_1.default.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Connection error', err));
// import { MongoClient } from "mongodb";
// //CONEXIÓN A LA BASE DE DATOS
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// //NOMBRE DE LA BASE DE DATOS
// const dbName = 'whispers_dark';
// async function main() {
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');
//   return 'done.';
// }
// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());
