// 1. Importar los modelos de datos y deppendencias a manipular
import { userModel } from "../models/user.model.js";

// 2. Crear la logica de las peticiones

// 2.1 peticion POST -> Crear usuarios
export const postUser = async (request, response) =>{

    try {

        // Deestructuracion ->  Permite acceder a cada una de las variables suministradas por el usuario en el Schema de datos
        const {fullName, emailUser, phoneUser, passwordUser} = request.body;
        
        // // encriptar la contrasena
        // // hash -> metodo para encriptar la contrasena
        // const codedPassword = await bcrypt.hash(passwordUser, 10);

        const newUser = await userModel.create({fullName, emailUser, phoneUser, passwordUser});

        return response.status(201).json({
            mensaje: "Usuario creado satisfactoriamente",
            datos: newUser
        });
        
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Error al crear un usuario',
            problema: error.message
        });
    }
}


// 2.2 peticions GET
export const getUser = async (request, response) => {

    // Logica de la peticion GET
    try {
        let users = await userModel.find() //Encontrar los usuarios

        if(users.length === 0){
            return response.status(200).json({
                mensaje : 'No hay usuarios en Ecocloset',
            });
        }

        return response.status(200).json({
            mensaje :'Estos son los usuarios encontrados',
            datos: users
        });

    } catch (error) { 
        return response.status(400).json({
            mensaje: 'Error al mostrar los usuarios',
            problema: error || error.message
        });
    }
}