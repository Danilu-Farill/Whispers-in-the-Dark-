import { routerExisting } from "./existing.router";
import { routerNewStory } from "./newStories.router";
import { routerUsers } from "./users.router";
import { routerCloudinary } from './story.routes';
import express, {Application, Router} from "express";
// import { routerUserExistingStory } from "./userExistingStory";
import { routerAuth } from "./auth.router";
import { routerOpenai } from "./openAi.router";
import { routerGemini } from "./gemini.router";

function router(app:Application): void {
  const routes: Router = express.Router();
  app.use('/home', routes);
  routes.use('/users', routerUsers);
  routes.use('/auth', routerAuth)
  routes.use('/story', routerExisting);
  routes.use('/newStory', routerNewStory);
  routes.use('/api', routerOpenai);
  routes.use('/api', routerGemini);
  // routes.use('/FKtables', routerUserExistingStory);
  routes.use('/cloudinary', routerCloudinary);
}

export {router};

