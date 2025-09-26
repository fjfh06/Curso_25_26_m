//Primer ejercicio de javaScript

// -------------declarar las variables-----------


// -------------declarar la funcion--------------

/**
 * Suma dos numeros y devuelve el resultado
 * @param {number} [a=0] -primer numero a sumar con valor por defecto 0
 * @param {number} [b=0] -segundo numero a sumar con valor por defecto 0
 * @returns {number}
 */
function suma(a=0,b=0){
    return a+b;
}

// ------------inicializar la aplicación---------

//test de la funcion suma
console.log(suma(1,2))
console.log(suma(10,15))
console.log(suma(7))

/*
function saludar(nombreUsuario){
    return `Bienvenid@ ${nombreUsuario ?? "Usuario"}`
}

let nombre;

console.log(saludar(nombre));
*/

//hacer la funcion aprobados y que diga si esta aprobado o no.
//2.0 que le pase como parametro un 9 o 10 sobre 5 aprobado <5 suspenso

/*function aprobados(nota){
    return nota>=5 ? "Aprobado":"Suspenso"
}*/

// const aprobados = (nota=0) => {
//     nota>=5 ? "Aprobado":"Suspenso"
// };

const aprobados = (nota=0) => nota>=5 ? "Aprobado":"Suspenso";
const aprobadosV2 = (nota=0) => nota>=9 ? "Sobresaliente": nota>=5 ? "Aprobado":"Suspenso";

console.log(aprobados(10))
console.log(aprobadosV2(9))