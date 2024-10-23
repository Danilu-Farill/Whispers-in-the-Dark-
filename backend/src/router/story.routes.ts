import { Router } from "express";
import { createStory } from "./../controller/story.controller";
import upload from "../config/multer.config";

const routerCloudinary = Router();

routerCloudinary.post("/create", upload.single("image"), createStory);

export {routerCloudinary};
