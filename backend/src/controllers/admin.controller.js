// 1. Importar los modelos de datos y deppendencias a manipular
import { adminModel } from "../models/admin.model.js";

// 2. Crear la logica de las peticiones

// 2.1 peticion POST -> Crear administrador
export const postAdmin = async (request, response) =>{

    try {

        // Deestructuracion ->  Permite acceder a cada una de las variables suministradas por el usuario en el Schema de datos
        const {emailAdmin, passwordAdmin, imageAdmin} = request.body;
        
        // // encriptar la contrasena
        // // hash -> metodo para encriptar la contrasena
        // const codedPassword = await bcrypt.hash(passwordUser, 10);

        const newAdmin = await adminModel.create({emailAdmin, passwordAdmin, imageAdmin});

        return response.status(201).json({
            mensaje: "Administrador creado satisfactoriamente",
            datos: newAdmin
        });
        
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Error al crear un administrador',
            problema: error.message
        });
    }
}


// 2.2 peticions GET
export const getAdmin = async (request, response) => {

    // Logica de la peticion GET
    try {
        let admin = await adminModel.find() //Encontrar los usuarios

        if(admin.length === 0){
            return response.status(200).json({
                mensaje : 'No hay administradores en Ecocloset',
            });
        }

        return response.status(200).json({
            mensaje :'Estos son los administradores encontrados',
            datos: admin
        });

    } catch (error) { 
        return response.status(400).json({
            mensaje: 'Error al mostrar los administradores',
            problema: error || error.message
        });
    }
}