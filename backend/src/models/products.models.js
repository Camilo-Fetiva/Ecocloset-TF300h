// DEFINIR LA ESTRUCTURA DE LOS DATOS A GUARDAR EN LA BASE DE DATOS

//1.IMPORTAR LAS DEPENDENCIAS A UTILIZAR
import mongoose from "mongoose";

//2.Plantilla de datos definida como SCHEMA -> esquema de datos solicitado a guardar en la base de datos
const productSchema = new mongoose.Schema({
    imageProduct:{type: String, required: true}, //Crear el tipo de dato dentro del esquema
    collectionProduct:{type: String},
    nameProduct:{type: String, required: true},
    priceProduct: {type: Number, required:true},
    descriptionProduct: {type: String},
    sizesProduct: {type: String, required:true},
    quantityProduct: {type: Number, required: true},
});

//3. La base de datos debe crear una coleccion con el esquma anterior (Nombre de la caracteristica, estructura de los datos)
export const productModel = mongoose.model('product', productSchema);