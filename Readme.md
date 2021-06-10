dir controllers/ para la logica de cada funcionalidad
dir lib/ para funciones o codigo que se pueda reutilizar
dir middlewares/ para funcionalidades que necesitemos de packetes externos
dir models/ para los modelos o estructura de los objetos
dir routes/ para las rutas donde llamamos a los controllers
app.ts para escuchar y configurar el puerto los middlewares
database.ts para la conexion a la base de datos
index.ts para iniciar la conexion y el sistema

clonar el repositorio
npm install
npm run dev

ejecuta la aplicacion en modo desarrollo
npm run build

construye la api en es6
crear un archivo .env y poner sus credenciales
detalladas en el archivo .env.example
