import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
// import mongoose from 'mongoose';
import {router} from './router/index.router';

dotenv.config();
const app: Application = express();
const port:number = parseInt(process.env.PORT || "4001");
app.use(express.json());

// const mongoURI = process.env.DB_URL;
// if (!mongoURI) {
//   throw new Error('DB_URL no está definido');
// }

// mongoose.connect(mongoURI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err: Error) => console.error('Connection error', err));
  
router(app);

app.get("/", (req: Request, resp: Response) => {
  resp.send("localhost 4000")
});

app.listen(port, (): void => {
  console.log('server active in port', port); 
});
