"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import mongoose from 'mongoose';
const index_router_1 = require("./router/index.router");
const connection_1 = require("./connection");
const sequelize_1 = require("./config/sequelize");
const cors_1 = __importDefault(require("cors"));
// import './models/associations.model';
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT || "4001");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
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
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_1.testConnection)();
        console.log('Database connected');
        yield sequelize_1.sequelize.sync();
        console.log('Database synchronized successfully!');
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
startServer();
