"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    versionKey: false
});
exports.default = mongoose_1.model("User", userSchema);
