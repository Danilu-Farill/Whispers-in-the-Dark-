"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = router;
const users_router_1 = require("./users.router");
const express_1 = __importDefault(require("express"));
function router(app) {
    const routes = express_1.default.Router();
    app.use('/home', routes);
    routes.use('/users', users_router_1.routerUsers);
}
//app.use("/home", router);
//app.use(router)
//router(app)
