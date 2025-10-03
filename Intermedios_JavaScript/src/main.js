// Ejercicio Destructuring profundo

import { productos } from "./data/data";
import { extraerData } from "./helpers/myFunction";

// Crear una funcion que extraiga los datos del objeto y me devuelva la suiguiente estructura

// nombre, fabricante {nombre, contacto}, especificaciones(solo la ram)

//Imaginemos un array de productos
// Usando la nueva especificacion obtener el nombre del producto con mas ram

/// -----INICIO DE APLICACION------

const newDataArray = arrayProducts => arrayProducts
    .map(extraerData);//.map(product => extraerData(product));

console.log(newDataArray(productos))