//solo para probar la api xd
import { Request, Response, NextFunction } from "express";
import Consulta from "../models/consulta.model";

export const createConsulta = async(req: Request, res: Response) => {
    
    const {costo, house} = req.body;
    const newConsulta = new Consulta({costo, house});
    const consultaSave = await newConsulta.save();

    res.status(200).json("producto creado chaval");
}

export const getConsulta = async(req: Request, res: Response) => {
    const listConsultas = await Consulta.find();
    res.status(200).json(listConsultas);
}