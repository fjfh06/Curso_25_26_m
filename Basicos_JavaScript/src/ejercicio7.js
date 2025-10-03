// OBJETOS EN JS

const usuario = {
    name: "Javi",
    email: "jfernandez@gmail.com",
    active: true,
}

//para las claves:
const claves = Object.keys(usuario);

//Utilidad verificar si las claves estan todas siguiendo un objeto de partida

//1.- como compruebo que todas las claves existen
function validarCamposRequeridos(objeto, camposRequeridos) {
    const clavesObjeto = Object.keys(objeto);
    // retorno verdadero o false
    return camposRequeridos.every(campo => clavesObjeto.includes(campo));
}

//data:
const datosFormulario = { name: "Carla", active: false}

const esValido= validarCamposRequeridos(datosFormulario, ["name", "password", "active"])

// para los valores: values

const producto = {
    nombre: "laptop",
    stock: 100,
    precio: 1100,
    destacad: true,
}

// array de valores:
const valores = Object.values(producto);

// Verificar si algun valor cumple unaa condición:

const precipitaciones = {
    enero: 110,
    febrero: 98,
    marzo: 120,
    abril: 50,
}

//algun mes la precipitacion fue superior a 100 litros

const mesSuperiorCien = Object.values(precipitaciones)
    .some(precipitacion => precipitacion>100)

// cuantos litros totales han caido los meses enero - abril

const arrayPrecipitaciones = Object.values(precipitaciones)
    .reduce((acc, precipitacion) => acc+precipitacion, 0)

// calcular la precipitacion maxima

const maxPrecipitacion = Math.max(...Object.values(precipitaciones));

//Obtener pares claves valor <-- entries()

const configuracion = {
    tema: "oscuro",
    idioma: "es",
    notificationes: true,
    volumen: 75,
}

const entradas = Object.entries(configuracion);

/*
    [
        ["tema","oscuro"],
        ["idioma", "es"],
        ["notificationes", true],
        ["volumen", 75],
    ]
*/

const usuarioBD = {
    name: "Javi",
    password: "dnsfnknfifjvf69458",
    email: "jfernandez@gmail.com",
    active: true,
}

// Filtrar las entradas para eliminar campos sensibles como password

//Object.entries(usuarioBD).filter()

// destructuring
const {nombre, email} = usuarioBD; 

const data = [1,2,3,4,5,6,7]
console.log(nombre)
const [a,b,,c] = data;

function vData ([v1,v2]){
    console.log("v1:",v1)
    console.log("v2:",v2)
}
vData([1,2,3,4,5])

// crear funcion llamada mostrarPersona. (Obetener username, y las dos primeras redes sociales que el usuario tenga)

const usuario3 = {
    id:1,
    info: {
        username: "jfernandez",
        redes: ["twitter", "github", "instagram"]
    }
}

const {info: {username, redes: [red1, red2]}} = usuario3;


//Obtener el nombre y la edad del siguiente objeto. si no existe edad que guarde el valor 0

const data4 = {
    id: 101,
    usuario: {
        perfil: {
        nombre: "Lucia",
        edad: 28,
        direccion: {
            ciudad: "Granada",
            pais: "España",
        },
    },
    activo: true,
    }
}

const {usuario: {perfil: {nombre2, edad=0}}} = data4

/*
    nombre --> "Lucia",
    edad --> 28
*/

const productos = [
    {
    id: 1,
    nombre: "Laptop",
    precio: 1000,
    fabricante: {
        nombre: "Msi",
        pais: "USA",
        contacto: {
            email: "fjavier@email.com",
            telefono: "2324324343",
        },
    },
    especificaciones: {
        ram: "4GB",
        cpu: "Intel core 5",
    }
    },
    {
    id: 2,
    nombre: "PC Escritorio",
    precio: 200,
    fabricante: {
        nombre: "Samsung",
        pais: "Corea",
        contacto: {
            email: "mateo@email.com",
            telefono: "9898644464",
        },
    },
    especificaciones: {
        ram: "8GB",
        cpu: "Intel core 7",
    }
    },
    {
    id: 3,
    nombre: "Tablet",
    precio: 500,
    fabricante: {
        nombre: "Acer",
        pais: "USA",
        contacto: {
            email: "salah@email.com",
            telefono: "2656565656",
        },
    },
    especificaciones: {
        ram: "16GB",
        cpu: "Intel core 3",
    }
    },
]

// Crear una funcion que extraiga los datos del objeto y me devuelva la suiguiente estructura

// nombre, fabricante {nombre, contacto}, especificaciones(solo la ram)

//Imaginemos un array de productos
// Usando la nueva especificacion obtener el nombre del producto con mas ram
const extraerData = (products) => {
    const {
        nombre,
        fabricante : {
            nombre:nombreFabricante,
            contacto
        },
        especificaciones:{ ram }
    } = products;
    return {
        nombre,
        fabricante,
        especificaciones,
    }
}

const obtenerArrys = arrayProducts => arrayProducts
    .map(product => extraerData(product));