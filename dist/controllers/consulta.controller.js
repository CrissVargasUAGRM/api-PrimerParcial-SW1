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
exports.getDiagrams = exports.createDiagram = void 0;
const consulta_model_1 = __importDefault(require("../models/consulta.model"));
const createDiagram = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req);
    const { diagram } = req.body;
    const newDiagram = new consulta_model_1.default({ diagram });
    const diagramSave = yield newDiagram.save();
    console.log(diagramSave);
    res.status(200).json({ message: "recibido choco" });
});
exports.createDiagram = createDiagram;
const getDiagrams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listDiagrams = yield consulta_model_1.default.find();
    res.status(200).json(listDiagrams);
});
exports.getDiagrams = getDiagrams;
