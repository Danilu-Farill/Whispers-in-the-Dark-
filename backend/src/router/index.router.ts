import { routerUsers } from "./users.router";
import express, {Application, Router} from "express";


function router(app:Application): void {
  const routes: Router = express.Router(); 
  app.use('/home', routes);  
  routes.use('/users', routerUsers)
}

export {router};
//app.use("/home", router);
//app.use(router)
//router(app)
