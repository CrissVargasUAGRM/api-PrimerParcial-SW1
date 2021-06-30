//solo para probar la api xd
import { Request, Response, NextFunction } from "express";
import Consulta from "../models/consulta.model";

export const createDiagram = async(req: Request, res: Response) => {
    //console.log(req);
    const {diagram} = req.body;
    const newDiagram = new Consulta({diagram});
    const diagramSave = await newDiagram.save();
    console.log(diagramSave);
    res.status(200).json({message: "recibido choco"});
}

export const getDiagrams = async(req: Request, res: Response) => {
    const listDiagrams = await Consulta.find();
    res.status(200).json(listDiagrams);
}