import { ENV } from "../config/env.js"

//Crear una funcion initialStorage que reciba un array de usuarios y los guarde en el localStorage
/**
 * 
 * @param {Object} arrayUsers 
 */
export function initialStorage(arrayUsers){
    localStorage.setItem(ENV.VITE_STORAGE_KEY, JSON.stringify(arrayUsers));
    console.info(`${ENV.VITE_APP_TITLE}: Usuarios guardados correctamente: `)
}



//Una funcion llamada getUsers() que se traiga todos los usuarios que hay almacenado en la clave key
/**
 * 
 * @returns 
 */
export const getUsers = () => {
    return JSON.parse(localStorage.getItem(ENV.VITE_STORAGE_KEY)) || [];
}


//crear una funcion llamada SetUsers(user) y lo guarde en el localStorage en la key del .env
/**
 * 
 * @param {*} user 
 */
export const setUsers = (user) => {
    initialStorage([...getUsers(),user]);
}