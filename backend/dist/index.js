"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import mongoose from 'mongoose';
const index_router_1 = require("./router/index.router");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT || "4001");
app.use(express_1.default.json());
// const mongoURI = process.env.DB_URL;
// if (!mongoURI) {
//   throw new Error('DB_URL no está definido');
// }
// mongoose.connect(mongoURI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err: Error) => console.error('Connection error', err));
(0, index_router_1.router)(app);
app.get("/", (req, resp) => {
    resp.send("localhost 4000");
});
app.listen(port, () => {
    console.log('server active in port', port);
});
