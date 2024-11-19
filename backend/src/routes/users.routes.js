// PERMITE CREAR LAS RUTAS PARA PODER HACER LAS PETICIONES (GET, POST, PUT, DELETE)

// 1. Importar los controladores y las dependencias
import { postUser, getUser } from "../controllers/user.controller.js";
import express from 'express';

// 2. Configurar el router de Express
export const userRouter = express.Router();

// 3. Crear la rutas para las peticiones de los productos

// 3.1 Ruta para la peticion POST
userRouter.post ('/crear', postUser);

// 3.2 Ruta para la peticion GET
userRouter.get ('/obtener', getUser);
