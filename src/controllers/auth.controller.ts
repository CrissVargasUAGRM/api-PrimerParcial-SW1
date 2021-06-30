import bcrypt from 'bcryptjs';
import User from "../models/users.model";
import jwt from "jsonwebtoken";
import * as resourses from "../lib/resourses";

import dotenv from "dotenv";

import { Request, Response, NextFunction } from "express";

dotenv.config();

export const singup = async (req: Request, res: Response, next: NextFunction) => {
    const {name, username, email, password} = req.body;
    const newUser = new User({
        name,
        username,
        email,
        password: await resourses.encryptPassword(password),
    });
    const saveUser = await newUser.save();
    const token = jwt.sign({id: saveUser._id}, `${process.env.SECRETKEY}`, {
        expiresIn: 86400 //24 horas
    });
    res.status(200).json({token, newUser});
}

export const singin = async (req: Request, res: Response, next: NextFunction) => {
    const userFound = await User.findOne({username: req.body.username});  
    if(!userFound){
        return res.status(400).json({message: "Usuario no encontrado :c"});
    }
    const passuser = bcrypt.compareSync(req.body.password, userFound.password);
    if(!passuser){
        return res.status(400).json({message: "Contraseña incorrecta :c"})
    }
    const token = jwt.sign({id: userFound._id}, `${process.env.SECRETKEY}`, {
        expiresIn: 86400 //24 horas
    });
    res.status(200).json({token, userFound});
}



