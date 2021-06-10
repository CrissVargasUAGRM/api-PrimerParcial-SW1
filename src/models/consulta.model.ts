// solo para probar la proteccion

import { Schema, model } from "mongoose";

const consultaSchema = new Schema({
    "costo": Number,
    "house": String
},{
    timestamps: true,
    versionKey: false
});

export default model("Consulta", consultaSchema);