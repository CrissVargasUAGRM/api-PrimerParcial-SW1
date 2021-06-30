// solo para probar la proteccion

import { Schema, model } from "mongoose";

const consultaSchema = new Schema({
    "diagram": {
        type: String
    }
},{
    timestamps: true,
    versionKey: false
});

export default model("Consulta", consultaSchema);