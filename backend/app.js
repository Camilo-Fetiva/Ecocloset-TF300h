// 1. Importar las dependencias y módulos necesarios 
import express from 'express'; //importar express para la prueba en la terminal
import dotenv from 'dotenv'; //Dependencia para manejar variables de entorno
import { connectionMongo } from './src/config/dataBase.js'; // dependencia para conectar la base de datos


// 2. CONFIGURAR EL USO DEL SERVIDOR
const app = express(); //crear la constante de prueba en la terminal
dotenv.config(); //configurar para poder usar variables de entorno
const port = process.env.PORT//configuración del puerto a utilizar para realizar las pruebas en la terminal, pueden ser: 3000, 6000 o 9000

//INVOCAR LA FUNCION DE LA BASE DE DATOS
connectionMongo ();

// 3. EJECUTAR EL SERVIDOR EN EL COMPUTADOR
app.listen(port, () => {
    console.log ('Soy el server ejecutandose correctamente en el puerto ', port);
});
