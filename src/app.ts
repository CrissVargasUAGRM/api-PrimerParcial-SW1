import cors from "cors"
import morgan from "morgan"
import express from "express"

import http from "http"
import socketIO from "socket.io"

import sequelize from "./utils/sequelize"
import * as mySockets from "./sockets/socket"

//Rutas
// import consultaRoutes from "./routes/consulta.routes"
// import authRoutes from "./routes/auth.routes"
// import dialogRoutes from "./routes/dialog.routes"

const app = express()
app.set("port", process.env.PORT || 3000)

export let httpServer = new http.Server(app)
let io = new socketIO.Server(httpServer)

sequelize
	.authenticate()
	.then(async () => {
		// await sequelize.sync({ alter: true })
        console.log('DB CONNECTED');        
    })
	.catch((err) => console.error(err))

app.use(
	cors({
		origin: true,
		credentials: true,
	})
)

app.use(morgan("dev"))
app.use(express.json())

// app.use("/api", consultaRoutes)
// app.use("/api", authRoutes)
// app.use("/api", dialogRoutes)

io.on("connection", (cliente) => {
	console.log("Cliente conectado")
	//mySockets.mensaje(cliente, io);
	mySockets.desconectar(cliente)
	mySockets.diagrama(cliente, io)
})

export default app
