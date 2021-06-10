import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    "name": {
        type: String,
        unique: true
    },
    "username": {
        type: String,
        unique: true
    },
    "email": {
        type: String,
        unique: true
    },
    "password": String,
},{
    timestamps: true,
    versionKey: false
});

export default model("User", userSchema);