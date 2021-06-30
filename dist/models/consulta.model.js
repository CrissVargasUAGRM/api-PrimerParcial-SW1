"use strict";
// solo para probar la proteccion
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const consultaSchema = new mongoose_1.Schema({
    "diagram": {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.default = mongoose_1.model("Consulta", consultaSchema);
