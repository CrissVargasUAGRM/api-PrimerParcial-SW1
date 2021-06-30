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
exports.httpServer = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const mySockets = __importStar(require("./sockets/socket"));
//Rutas
const consulta_routes_1 = __importDefault(require("./routes/consulta.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
dotenv.config();
const app = express_1.default();
app.set("port", process.env.PORT || 3000);
exports.httpServer = new http_1.default.Server(app);
let io = new socket_io_1.default.Server(exports.httpServer);
app.use(cors_1.default({
    origin: true,
    credentials: true
}));
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use("/api", consulta_routes_1.default);
app.use("/api", auth_routes_1.default);
io.on('connection', cliente => {
    console.log('Cliente conectado');
    //mySockets.mensaje(cliente, io);
    mySockets.desconectar(cliente);
    mySockets.diagrama(cliente, io);
});
exports.default = app;
