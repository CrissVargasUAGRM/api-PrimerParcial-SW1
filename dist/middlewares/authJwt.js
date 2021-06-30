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
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_model_1 = __importDefault(require("../models/users.model"));
dotenv_1.default.config();
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers["access-token"];
        if (!token) {
            return res.status(403).json({ message: "no existe token" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, `${process.env.SECRETKEY}`);
        const iduser = decoded.id;
        const user = yield users_model_1.default.findById(iduser);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado :c" });
        }
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "no autorizado" });
    }
});
exports.verifyToken = verifyToken;
