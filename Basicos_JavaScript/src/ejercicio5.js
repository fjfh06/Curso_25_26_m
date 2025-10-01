// .at <-- acceso con indices negativos.

const frutas = ["manzana", "pera", "uva", "naranja", "fresa"];
const edades = [10, 20, 30, 40, 50];

console.log(frutas.at(-2));

// splice --> Modificar un array sin mutar el original
frutas.splice(1,2, "pepe", "juan", "manzana")
frutas.concat("pepe", "juan", "manzana")

const array = [ ...frutas, "pepe", ...edades ]
console.log(array)

//SET <-- OTRO TIPO DE DATOS (datos unicos)
const pesos =  [4,54,32,2,2,44,2,2,55,75,32];
const sinDuplicados = [...new Set(pesos)];//**************** 
console.log(sinDuplicados);

// .reduce (redurcir un array a un unico valor) ************************
// pesos.reduce((acumulador, element, indice, array) => aqui va la logica, valorInicial
// acumulador, elemento <-- NO SON OPCIONALES
// el resto son opcionales
// NO MUTA EL ARRAY



/*
Hacer suma
hacer la multiplicacion de todos
encontrar el maximo y el minimo
dado un array que sea manzana, platano, naranja, manzana, manzana, platano, pera, pera   devolvedme un objeto clave valor nombre de la fruta: cuantas veces aparece esa fruta
dado el siguiente array bidimensional [[1,2],[3,4],[5,6]] apalanar dicho en array en una unidimensional
*/


pesos.reduce((suma, peso) => suma + peso  , 0);
pesos.reduce((producto, peso) => producto * peso , 1);
pesos.reduce((maximo, peso)=> peso>maximo ? peso : maximo, pesos[0]);
pesos.reduce((minimo, peso)=> peso<minimo ? peso : minimo, pesos[0]);

const frutas2 = ["manzana", "platano", "naranja", "manzana", "manzana", "platano", "pera", "pera"];
/*
    {
        manzana: 3,
        platano: 2,
        naranja: 1,
        pera: 2
    }
*/

frutas2.reduce((acc, fruta) => acc[fruta] = (acc[fruta] || 0) + 1, {} );

const usuarios = [ 
    {id:1, nombre:"Pepe", edad: 20, data:{books:100}},
    {id:2, nombre:"Juan", edad: 30, data:{books:50}},
    {id:3, nombre:"Ana", edad: 40, data:{books:20}},
    {id:4, nombre:"Esther", edad: 60, data:{books:35}},
    {id:5, nombre:"Sara", edad: 10, data:{books:10}},
    {id:6, nombre:"Ruth", edad: 40, data:{books:40}},
    {id:7, nombre:"Samuel", edad: 19, data:{books:0}},
]

usuarios.find(usuario => usuario.nombre.toLowerCase === "pepe")

//Dame todos los usuarios cuya edad >= 28
let resultado = usuarios.find(usuario => Number(usuario.edad) > 30)??{};

/*
Devolver un array con solo los nombres de los usuarios que tiene en su biblioteca mas de 20 libros
Obtener el valor promedio total de todos los libros si suponemos un precio medio de 28€
Decidme que usuarios no tienen libros
*/

console.log( usuarios.reduce((acc, usuario) => usuario.data.books>20? acc.concat(usuario.nombre):acc, []));
console.log( usuarios.reduce((acc, usuario) => acc + usuario.data.books*28, 0) +"€");
console.log( usuarios.reduce((acc,usuario) => usuario.data.books==0?usuario:acc, []));