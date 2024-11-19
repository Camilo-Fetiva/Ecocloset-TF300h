// DEFINIR LA ESTRUCTURA DE LOS DATOS A GUARDAR EN LA BASE DE DATOS

//1.IMPORTAR LAS DEPENDENCIAS
import mongoose from "mongoose";

//2.Plantilla de datos definida como SCHEMA -> esquema de datos solicitado a guardar en la base de datos
const userSchema = new mongoose.Schema({
    fullName:{type: String, required: true}, //Crear el tipo de dato dentro del esquema, en este caso el nombre
    emailUser:{type: String, required: true, unique:true},
    phoneUser: {type: Number, required: true, unique:true},
    passwordUser:{type: String, required: true},
});

//3. La base de datos debe crear una coleccion con el esquma anterior (Nombre de la caracteristica, estructura de los datos)
export const userModel = mongoose.model('user', userSchema);