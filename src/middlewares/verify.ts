import User from "../models/users.model";
import { Request, Response, NextFunction } from 'express';

export const emailDuplicate = async(req: Request, res: Response, next:NextFunction) => {
    const userEmail = await User.findOne({email: req.body.email});
    if(userEmail){
        return res.status(400).json({message: "El email ya existe"});
    }
    next();
    return;
}

export const userNameDuplicate = async(req: Request, res: Response, next:NextFunction) => {
    const userName = await User.findOne({username: req.body.username});
    if(userName){
        return res.status(400).json({message: "El usuario ya existe"});
    }
    next();
    return;
}