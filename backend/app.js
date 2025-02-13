// 1. Importar las dependencias y módulos necesarios 
import express from 'express'; //importar express para la prueba en la terminal
import dotenv from 'dotenv'; //Dependencia para manejar variables de entorno
import { connectionMongo } from './src/config/dataBase.js'; // dependencia para conectar la base de datos
import { productRouter } from './src/routes/products.routes.js';
import { userRouter } from './src/routes/users.routes.js';
import { orderRouter } from './src/routes/order.routes.js';
import { loginRouter } from './src/routes/login.routes.js';
import { adminRouter } from './src/routes/admin.routes.js';

// Dependencia para la conexion con el frontend
import cors from 'cors';

// IMPORTACIONES
import path from "path";
import { fileURLToPath } from "url";

// 2. CONFIGURAR EL USO DEL SERVIDOR
const app = express();
dotenv.config();
connectionMongo();
const port = process.env.PORT
app.use(cors()); // <- Uso para utilizar el backend en el navegador

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

app.use(express.json()); //Usar formato JSON, CREAR y ACTUALIZAR datos
app.use ( '/productos', productRouter);
app.use ('/usuarios', userRouter);
app.use ('/ordenes', orderRouter);
app.use ('/login', loginRouter);
app.use ( '/administrador', adminRouter);


//PETICION PARA MOSTRAR FRONTEND
app.use(express.static(path.join(__dirname, "public")));

// RUTA PRINCIPAL
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

export default app;
