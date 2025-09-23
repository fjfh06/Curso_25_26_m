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