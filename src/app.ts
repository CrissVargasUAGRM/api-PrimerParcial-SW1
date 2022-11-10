import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from "dotenv";
import socketIO from "socket.io";
import http from "http";
import * as mySockets from "./sockets/socket";

//Rutas
import consultaRoutes from "./routes/consulta.routes";
import authRoutes from "./routes/auth.routes";
import dialogRoutes from "./routes/dialog.routes";

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3000);

export let httpServer = new http.Server(app);
let io = new socketIO.Server(httpServer);

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());

app.use("/api", consultaRoutes);
app.use("/api", authRoutes);
app.use("/api", dialogRoutes);

io.on('connection', cliente => {
    console.log('Cliente conectado');
    //mySockets.mensaje(cliente, io);
    mySockets.desconectar(cliente);
    mySockets.diagrama(cliente, io);
});

export default app;