//Crear un juego de un dado que usando una funcion llamada tirarDado permita tirar un dado de 6 caras con valores 1-6 y devuelva el resultado de la tirada
//crear una funcion llamada simular que pase como parametro el numero de tiradas y devuelva el numero que mas veces ha salido en las tiradas
//Primer ejercicio de javaScript

// -------------declarar las variables-----------


// -------------declarar la funcion--------------
/**
 * Tira un dado del 1 al 6
 * @returns {number} Returna el numero
 */
function tirarDado(){
    return Math.floor(Math.random() * 6) + 1;
}

/**
 * Simula tiradas
 * @param {number} Numero de veces que tira un dado
 * @returns {number} El numero y la veces que ha salido
 */
function simular(a){
    let contador = [0,0,0,0,0,0];

    for(let i = 0; i < a; i++){
        contador[tirarDado() - 1]++;
    }

    let max = contador[0];
    let numMasRepetido = 1;

    for (let i = 1; i < contador.length; i++) {
        if (contador[i] > max) {
            max = contador[i];
            numMasRepetido = i + 1;
        }
    }

    return `${numMasRepetido}: ${max} veces`;
}


// ------------inicializar la aplicación---------

//test de la funcion tirarDado
console.log(tirarDado())
console.log(simular(12))