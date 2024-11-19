// 1. Importar las dependencias y módulos necesarios 
import express from 'express'; //importar express para la prueba en la terminal
import dotenv from 'dotenv'; //Dependencia para manejar variables de entorno
import { connectionMongo } from './src/config/dataBase.js'; // dependencia para conectar la base de datos
import { productRouter } from './src/routes/products.routes.js';
import { userRouter } from './src/routes/users.routes.js';


// 2. CONFIGURAR EL USO DEL SERVIDOR
const app = express();
dotenv.config();
const port = process.env.PORT

app.use(express.json()); //Usar formato JSON, CREAR y ACTUALIZAR datos
app.use ( '/productos', productRouter);
app.use ('/usuarios', userRouter);

//INVOCAR LA FUNCION DE LA BASE DE DATOS
connectionMongo ();

// 3. EJECUTAR EL SERVIDOR EN EL COMPUTADOR
app.listen(port, () => {
    console.log ('Soy el server ejecutandose correctamente en el puerto ', port);
});
