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
exports.userNameDuplicate = exports.emailDuplicate = void 0;
const users_model_1 = __importDefault(require("../models/users.model"));
const emailDuplicate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = yield users_model_1.default.findOne({ email: req.body.email });
    if (userEmail) {
        return res.status(400).json({ message: "El email ya existe" });
    }
    next();
    return;
});
exports.emailDuplicate = emailDuplicate;
const userNameDuplicate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userName = yield users_model_1.default.findOne({ username: req.body.username });
    if (userName) {
        return res.status(400).json({ message: "El usuario ya existe" });
    }
    next();
    return;
});
exports.userNameDuplicate = userNameDuplicate;
