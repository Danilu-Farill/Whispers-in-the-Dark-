"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_router_1 = require("./router/index.router");
const connection_1 = require("./connection");
const sequelize_1 = require("./config/sequelize");
const cors_1 = __importDefault(require("cors"));
// import { User, UserExistingStory, NewStory, StoryExisting } from './models/index.model'
require("./models/associations.model");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const frontendUrl = process.env.FRONTEND_URL;
const backendUrl = process.env.BACKEND_URL;
if (!frontendUrl || !backendUrl) {
    throw new Error('FRONTEND_URL o BACKEND_URL no estan definidos');
}
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [frontendUrl, backendUrl, 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
(0, index_router_1.router)(app);
app.get("/", (req, resp) => {
    resp.send("localhost 4000");
});
const startServer = async () => {
    try {
        await (0, connection_1.testConnection)();
        console.log('Database connected');
        await sequelize_1.sequelize.sync();
        console.log('Database synchronized successfully!');
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
startServer();
