import { routerExisting } from "./existing.router";
import { routerNewStory } from "./newStories.roter";
import { routerUsers } from "./users.router";
import { routerCloudinary } from './story.routes';
import express, {Application, Router} from "express";
import { routerUserExistingStory } from "./userExistingStory";
import { routerAuth } from "./auth.router";

function router(app:Application): void {
  const routes: Router = express.Router();
  app.use('/home', routes);
  routes.use('/users', routerUsers);
  routes.use('/auth', routerAuth)
  routes.use('/story', routerExisting);
  routes.use('/newStory', routerNewStory);
  routes.use('/FKtables', routerUserExistingStory);
  routes.use('/cloudinary', routerCloudinary);
}

export {router};

