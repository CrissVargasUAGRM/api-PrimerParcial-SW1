import app, { httpServer } from "./app";
import "./database"; 

httpServer.listen(app.get("port"), () => {
    console.log(`server corriendo en el puerto ${app.get("port")}`);
})