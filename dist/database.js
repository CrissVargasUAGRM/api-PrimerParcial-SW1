"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
//mongodb://localhost/${process.env.NAMEDB}
//mongodb+srv://cristhian:<password>@parcialsw1.xjjxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@parcialsw1.xjjxv.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority
//${process.env.URLPROD}
mongoose_1.default.connect(`${process.env.URLPROD}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(db => console.log("Data Base is connected"))
    .catch(err => console.log(err));
