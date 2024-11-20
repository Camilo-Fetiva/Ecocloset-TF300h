// PERMITE CREAR LAS RUTAS PARA PODER HACER LAS PETICIONES (GET, POST, DELETE)

// 1. Importar los controladores y las dependencias
import { postOrder, getOrder, deleteOrderById } from "../controllers/orders.controller.js";
import express from 'express';

// 2. Configurar el router de Express
export const orderRouter = express.Router();

// 3. Crear la rutas para las peticiones de los productos

// 3.1 Ruta para la peticion POST
orderRouter.post ('/crear', postOrder);

// 3.2 Ruta para la peticion GET
orderRouter.get ('/obtener', getOrder);

// 3.3 Ruta para la peticion DELETE
orderRouter.delete ('/eliminar/:id', deleteOrderById);