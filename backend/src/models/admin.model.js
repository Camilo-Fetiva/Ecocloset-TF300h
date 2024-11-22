// DEFINIR LA ESTRUCTURA DE LOS DATOS A GUARDAR EN LA BASE DE DATOS

//1.IMPORTAR LAS DEPENDENCIAS
import mongoose from "mongoose";

//2.Plantilla de datos definida como SCHEMA -> esquema de datos solicitado a guardar en la base de datos
const adminSchema = new mongoose.Schema({
    emailAdmin:{type: String, required: true, unique:true},
    passwordAdmin:{type: String, required: true},
    imageAdmin:{type: String, required: true},
    roleUser: {type: String, default: 'Admin'}
});

//3. La base de datos debe crear una coleccion con el esquma anterior (Nombre de la caracteristica, estructura de los datos)
export const adminModel = mongoose.model('admin', adminSchema);