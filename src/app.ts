import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from "dotenv";

//Rutas
import consultaRoutes from "./routes/consulta.routes";
import authRoutes from "./routes/auth.routes";

dotenv.config();
const app = express();
app.set("port", process.env.PORT);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use("/api", consultaRoutes);
app.use("/api", authRoutes);

export default app;