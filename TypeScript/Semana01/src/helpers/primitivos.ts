//primitivos en TypeScript

// 1-String
let nombre: string = "Javi";
let cp: string = "18003";
let mensaje: string = `Bienvenido D/Dña ${nombre} --> cp ${cp}`;

function procesarTexto (texto:string):string {
    return texto.trim().toUpperCase();
}

console.log(procesarTexto(mensaje));
let saludo="Que tal todo";//declaracion con Inferencia de TIPOS
console.log(procesarTexto(saludo));

//2.-Number

//calcularPrecioFinal(precio, impuesto, descuento)

function calcularPrecioFinal(precio:number, impuesto:number, descuento:number):number {
    return(precio*     (1+(impuesto/100))     *      (1-(descuento/100))    );
};

console.log(calcularPrecioFinal(80,21,3));


//culaquier tipo any (No usar salvo que no quede mas remedio)
//funcion que verifique que lo que pase como parametro es un numero
//NO es infinito, !isNaN

function esNumero(numero:any):boolean{
    return typeof numero === "number"&& isFinite(numero) && !isNaN(numero);
}
esNumero("7");

//calcular el promedio de los elementos de un array de numeros

function calcularPromedio(numeros:number[]):number{
    if(numeros.length===0){
        throw new Error("No se puede calcular un array vacio");
    }
    const suma:number = numeros.reduce( (acc, num) => acc + num,0)/numeros.length;
    return suma/numeros.length;
}

function calcularExtremos(numeros:number[]):{max: number; min:number}{
    if(numeros.length===0){
        throw new Error("No se puede calcular un array vacio");
    }
    const min: number = Math.min(...numeros);
    const max: number = Math.max(...numeros);

    return {max, min};
}



//3.-Booleanos

//comprobar si un email es correcto o no

function esEmailValido(email:string):boolean{
    //fferher513h@g.educaand.es El punto y el espacio son caracteres especiales necesitas \. \s
    const emailRegex: RegExp = /^[^\s@]+@+[^\s@]+\.+[^\s@]+$/;
    return emailRegex.test(email);
}

esEmailValido("fferher513h@g.educaand.es")

//interface Tipo de dato generado por el usuario para una determinada situacion

interface permisosUsuario {
    puedeLeer: boolean,
    puedeEscribir: boolean,
    puedeBorrar: boolean,
}

//crear una funcion llamada obtener permisos que dependiendo si el usuario es 
//administrador invitado o usuario cambie los permisos de la interfaz

type tipoUsuario = "invitado" | "administrador" | "usuario";
// type permite crear un tipo de dato entre unos valores dados

function obtenerPermisos(usuario: tipoUsuario):permisosUsuario {
    switch(usuario){
        case "invitado":
            return {
                puedeLeer: true,
                puedeEscribir: false,
                puedeBorrar: false,
            };
        case "usuario":
            return {
                puedeLeer: true,
                puedeEscribir: true,
                puedeBorrar: false,
            };
        case "administrador":
            return {
                puedeLeer: true,
                puedeEscribir: true,
                puedeBorrar: true,
            };
        default:
            return {
                puedeLeer: false,
                puedeEscribir: false,
                puedeBorrar: false,
            };
    }
}

obtenerPermisos("usuario");

//NULL UNDEFINED

let posibleNombre: string | null = "Invitado";
let posibleNombreIndefinido: string | undefined = undefined;

//arrow function

const duplicar = (numero:number):number => numero*2;

//crear una funcion que le pase como parametro un array de objetos y me devuelva los usuarios que son mayores de edad

const usuarios = [
    { nombre: "Ana", edad:34 },
    { nombre: "Sara", edad:14 },
    { nombre: "Mario", edad:24 },
    { nombre: "Carlos", edad:18 }
]

const mayorEdad = (usuarios:{nombre: string, edad: number}[]):{nombre: string, edad: number}[] => usuarios.filter(usuario => usuario.edad>=18);

mayorEdad(usuarios);

const misNumeros : number[] = [1, -3, 4, 54, 2, 4, 9, -23, 64, 12, -76, 32];

//función procesarNumeros que me devuelva un array de numeros solo 
//positivos, multiplicados por 2 u ordenados de menor a mayor

const procesarNumeros = (numeros: number[]):number[] => numeros
    .filter( numero => numero>=0)
    .map( numero => numero*2)
    .sort((a,b) => b-a);

//ejercicio:

interface Cliente {
    id: number,
    nombre: string,
    email: string,
    telefono: string
}

const clientes: Cliente[] = [
  { id: 1, nombre: "Carlos Lopez", email: "carlos.lopez@email.com", telefono: "600123456" },
  { id: 2, nombre: "Ana Martinez", email: "ana.martinez@email.com", telefono: "611234567" },
  { id: 3, nombre: "Jorge Perez", email: "jorge.perez@email.com", telefono: "622345678" },
  { id: 4, nombre: "Lucia Gomez", email: "lucia.gomez@email.com", telefono: "633456789" },
  { id: 5, nombre: "Sergio Ruiz", email: "sergio.ruiz@email.com", telefono: "644567890" },
  { id: 6, nombre: "Elena Torres", email: "elena.torres@email.com", telefono: "655678901" },
  { id: 7, nombre: "Mario Diaz", email: "mario.diaz@email.com", telefono: "666789012" },
  { id: 8, nombre: "Paula Castro", email: "paula.castro@email.com", telefono: "677890123" }
];

//Crear una funcion que genere un MAP
//{
//  idUsuario: {
//      nombre: string,
//      email: string,
//      telefono: string
//  }
//}

const crearMapa = (clientes: Cliente[]): Map<number,{nombre: string, email: string, telefono: string}> => 
    new Map(clientes
        .map(cliente => [cliente.id, {nombre: cliente.nombre, email: cliente.email, telefono: cliente.telefono}]))

crearMapa(clientes);

interface Operacion {
    operacion: "sumar" | "restar" | "multiplicar" | "dividir";
    operando1: number;
    operando2: number;
};

const calculadora = (operacion:Operacion):number => {
    switch (operacion.operacion){
        case "sumar":
            return operacion.operando1 + operacion.operando2;
        case "sumar":
            return operacion.operando1>operacion.operando2?
                operacion.operando1-operacion.operando2:
                operacion.operando2-operacion.operando1
        case "multiplicar":
            return operacion.operando1 * operacion.operando2;
        case "dividir":
            return operacion.operando1 / operacion.operando2;
        default:
            return 0;
    }
};