import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/users.model";

dotenv.config();
export const verifyToken = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers["access-token"] as string;
        if(!token){
            return res.status(403).json({message: "no existe token"});
        }
        const decoded: any = jwt.verify(token, `${process.env.SECRETKEY}`);
        const iduser = decoded.id;
        const user = await User.findById(iduser);
        if(!user){
            return res.status(404).json({message: "Usuario no encontrado :c"})
        }
        next();
    } catch (error) {
        return res.status(401).json({message: "no autorizado"});
    }
}