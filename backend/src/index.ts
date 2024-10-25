import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import {router} from './router/index.router';
import { testConnection } from "./connection";
import { sequelize } from "./config/sequelize";
import cors from 'cors';
import { User, UserExistingStory, NewStory, StoryExisting } from './models/index.model'
// import './models/associations.model';

dotenv.config();
const app: Application = express();
const port:number = parseInt(process.env.PORT || "4001");
app.use(express.json());
//app.use(cors());
app.use(cors({
  origin: ['https://whispers-in-the-dark-phi.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
  
router(app);

app.get("/", (req: Request, resp: Response) => {
  resp.send("localhost 4000")
});

const startServer = async () => {
  try {
    await testConnection();
    console.log('Database connected');

    await sequelize.sync();
    console.log('Database synchronized successfully!');

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
