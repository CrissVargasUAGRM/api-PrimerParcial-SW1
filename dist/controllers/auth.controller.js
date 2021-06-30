"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.singin = exports.singup = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const users_model_1 = __importDefault(require("../models/users.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const resourses = __importStar(require("../lib/resourses"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const singup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, username, email, password } = req.body;
    const newUser = new users_model_1.default({
        name,
        username,
        email,
        password: yield resourses.encryptPassword(password),
    });
    const saveUser = yield newUser.save();
    const token = jsonwebtoken_1.default.sign({ id: saveUser._id }, `${process.env.SECRETKEY}`, {
        expiresIn: 86400 //24 horas
    });
    res.status(200).json({ token, newUser });
});
exports.singup = singup;
const singin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield users_model_1.default.findOne({ username: req.body.username });
    if (!userFound) {
        return res.status(400).json({ message: "Usuario no encontrado :c" });
    }
    const passuser = bcryptjs_1.default.compareSync(req.body.password, userFound.password);
    if (!passuser) {
        return res.status(400).json({ message: "Contraseña incorrecta :c" });
    }
    const token = jsonwebtoken_1.default.sign({ id: userFound._id }, `${process.env.SECRETKEY}`, {
        expiresIn: 86400 //24 horas
    });
    res.status(200).json({ token, userFound });
});
exports.singin = singin;
