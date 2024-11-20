// PERMITE CREAR LAS RUTAS PARA PODER HACER LAS PETICIONES (GET, POST)

// 1. Importar los controladores y las dependencias
import { postAdmin, getAdmin } from "../controllers/admin.controller.js";
import express from 'express';

// 2. Configurar el router de Express
export const adminRouter = express.Router();

// 3. Crear la rutas para las peticiones de los productos

// 3.1 Ruta para la peticion POST
adminRouter.post ('/crear', postAdmin);

// 3.2 Ruta para la peticion GET
adminRouter.get ('/obtener', getAdmin);
