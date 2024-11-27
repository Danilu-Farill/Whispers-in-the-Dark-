"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const auth_service_1 = require("../service/auth.service");
const loginUser = async (req, resp) => {
    try {
        const { email, password } = req.body;
        const token = await (0, auth_service_1.tokenUser)(email, password);
        resp.status(200).json({ message: "Usuario encontrado", token, email });
        // resp.status(200).json({message:"Usuario encontrado", token,username:loginUser?.username});
    }
    catch (error) {
        if (error instanceof Error) {
            return resp.status(400).json({ message: error.message });
        }
        resp.status(500).json({ message: "Error del servidor" });
    }
};
exports.loginUser = loginUser;
