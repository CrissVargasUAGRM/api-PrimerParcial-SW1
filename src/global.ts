import * as dotenv from "dotenv";

dotenv.config;

export const  server_port: number = Number(process.env.PORT);