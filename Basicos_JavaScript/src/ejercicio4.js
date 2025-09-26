//Usos de los arrays

//declaración:
/*
const edades=[];
const frutas=["manzana", "pera", "uva"];
*/
// usando el constructor Array
/*
const cp = new Array();
const cc = new Array("3adjsjjd","dfkdsfks","sdsafafa")
*/
//Añadir
/*
edades.push(12); //añadiendo al final
edades.unshift(6); // añadir al comienzo
*/
//Eliminar
/*
edades.pop() //Elimina el ultimo y retorna lo que ha eliminado
edades.shift() //Elimina el primer elemento y retorna lo que ha eliminado
*/
// ******* slice extraer partes de un array

//edades.slice()

//**************************** map
/*
edades.map( (edad)=> edad*2 )

// *********** filter
edades.filter((edad)=> edad>18)
*/

/*
Dado un array de nombres crear una funcion llamada mayusculas que ponga tdodo los elementos de ese array en mayusculas todos los ele
Crear funcion Precios con iva que al pasar un arrray de precios me los devuelva con iva incluido
Crear una funcion llamada impares cuadrado que le pase un array de numeros y me devuelva solo los impares elevados al cuadrado
Crar una funcion llamada normalizar email que le pase un array de emails que puedan llevar espacios al principio o al final de email y quiero que me los devuelva sin espacios al principio y al final
Crear una funcion llamada filtrar longitud que le pase como parametros array nombres, un tamaño y me devuelva solo los nombres con longitud igual o mayor que la longitud que le he dado
Funcion Normalizar nombres propios que le pase como parametro un array de nombres y me los devuelva con la letra capital en mayuscula tanto de nombre como apellidos tener cuidado con nombres compuestos
*/

/**
 * 
 * @param {*} nombres Un array con palabras
 * @returns Devuelve las palabras formateadas en mayuscula
 */
const mayusculas = (nombres) => nombres.
    map(nombre => nombre
    .toUpperCase());

/**
 * 
 * @param {*} precios Un array con precios
 * @returns Devuelve el precio mas el iva del 21%
 */
const preciosConIva = (precios) => precios
    .map(precio => precio * 1.21);

/**
 * 
 * @param {*} numeros Un array de numeros
 * @returns Devuelve los numeros impares elevados al cuadrado
 */
const imparesCuadrado = (numeros) => numeros
    .filter(numero => numero % 2 !== 0)
    .map(numero => numero * numero);

/**
 * 
 * @param {*} emails Un array con emails
 * @returns Devuelve los emails sin espacios al principio y al final
 */
const normalizarEmail = (emails) => emails
    .map(email => email.trim());

/**
 * 
 * @param {*} palabras Un array de palabras 
 * @param {*} longitud Le pasas una longitud
 * @returns Devuelve las palabras con una longitud igual o mayor a la que le pasas
 */
const filtrarLongitud = (palabras, longitud) => palabras
    .filter(palabra => palabra.length >= longitud);

/**
 * 
 * @param {*} nombres Me pasas un array de nombres
 * @returns Devuelve los nombres con la letra capital en mayuscula
 */
const normalizarNombres = (nombres) =>
    nombres.map(nombre => 
        nombre.split(" ")
        .filter(palabra => palabra !== "")
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(" ")
    )


//test
function test(){

console.log(`Formateo de palabras: ${mayusculas(["manzana", "pera", "uva"])}`);
console.log(`Precios con iva: ${preciosConIva([10, 20, 30])}`);
console.log(`Impares elevados al cuadrado: ${imparesCuadrado([1, 2, 3, 4, 5])}`);
console.log(`Correos normalizados sin espacios: ${normalizarEmail([" email@pepe.com "," pepe@email.com "])}`);
console.log(`Nombres filtrados por longitud mayor o superior a 4: ${filtrarLongitud(["manzana", "pera", "uva"],4)}`);
console.log(`Nombres normalizados por la letra capital en mayuscula: ${normalizarNombres(["juan","maria","pedro antonio escudero","ana fernández","maria jose"])}`);

}

test()