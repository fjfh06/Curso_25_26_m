const numeros = [1,2,3,4,5];
//Quiero que me genereis un objeto que tenga los siguientes campos:
/*
    {
    valor: numero_correspondiente,
    posicion: posicion_dentro_del_array
    esUltimo: array_que_me_diga_si_es_el_ultimo (true/false)
    }
*/

const resumenNumeros = numeros.map((numero, index, array)=>{
    return {
        valor: numero,
        posicion: index,
        esUltimo: array.length-1===index,
    }
});

const products = [
    {
        name: "laptop", price: 1000, stock : 5, active: true
    },
    {
        name: "Mouse Logitech", price: 28.58, stock:0, active: false
    },
    {
        name: "Laptop MSI", price: 35, stock:2, active: false
    },
];

/* Mapeado:
nombre
precioOriginal
precioConIva
hayStock
*/

const productosMapeados = products.map((product) => {
    return {
        name: product.name,
        originalPrice: product.price,
        priceWithVat: product.price * 1.21,
        avaible: product.stock>0,
    }
});

//Filtrame los productos que tienen stock y estan activos 

const filtrados = products.filter(product => product.stock>0 && product.active);

//Mostrar todos los datos de los laptop de forma case Insensitive
const datosLaptop = products.filter(product => product.name.toLowerCase().includes("laptop"))

//Crear una funcion que pase como parametro un array de objetos y comos segundo parametro el nombre de un objeto;

/**
 * 
 * @param {object} objetos //Array con objetos
 * @param {string} nombreObjeto //Nombre del objeto
 * @returns //Devuelve el objeto que tiene ese nombre
 */
const findProduct = (objetos, nameObjeto) => objetos
    .filter(objeto => objeto.name.toLowerCase()
        .includes(nameObjeto.toLowerCase())
    );

console.log(findProduct(products, "LaptOp"));


// crear una funcion que le pase como parametro un array de productos, precio inicial, precio final, 
// y me duevuelva los productos cuyo precio esta en ese rango de valores (sin incluirlos).
//se llamara la funcion filterPrice

/**
 * 
 * @param {object} products Array de productos
 * @param {number} initPrice Precio inicial
 * @param {number} endPrice Precio final
 * @returns Los productos que esten dentro de esos precios dados
 */
const filterPrice = (products, initPrice, endPrice) => products
    .filter(product => product.price>initPrice && product.price<endPrice);

const filterPrice2 = (products, initPrice, endPrice) => {
    /*if(initPrice>endPrice){
        let a = initPrice
    }*/
    return products.filter(product => product.price>initPrice && product.price<endPrice)
}

const carrito = [
    {
        name: "laptop", price: 1000, count: 5, category: "Electronica",
    },
    {
        name: "Mouse Logitech", price: 28.58, count: 0, category: "Electronica",
    },
    {
        name: "Laptop MSI", price: 35, count: 2, category: "Electronica",
    },
    {
        name: "Monitor MSI", price: 35, count: 2, category: "Electronica",
    },
    {
        name: "Teclado mecanico", price: 35, count: 2, category: "Electronica",
    },
    {
        name: "Polo Scalper", price: 40, count: 2, category: "Ropa",
    },
    {
        name: "Pantalon Stradivarius", price: 60, count: 3, category: "Ropa",
    },
];

//Funcion que me pase un carrito y me diga el total del carrito

/**
 * 
 * @param {Object[]} cart Carrito de objetos
 * @param {Number} vat (iva) - Iva a aplicar
 * @returns {Number} Total del carrito con Iva
 */
const totalCarro = (cart = [], vat = 1.21) => 
    cart.length <= 0? 0 : cart
        .reduce((acc, product) => product.count > 5 ? (acc + product.price*vat)*0.95 : acc + product.price*vat ,0);

//Agrupar el carrito por categorias

/*

{
    Electronica: [
        {
        }
    ],

    Ropa: [
        {
        }
    ],
}
*/

//Agrupar por carrito

const productsCategory = (carrito = []) => carrito
    .reduce((groups, product) => {
            const categoryFilter = product.category;
            if(!groups[categoryFilter]){
                groups[categoryFilter] = [];
            }

            groups[categoryFilter].push(product)
            return groups;
        }, {}
    );


const votos = ["Ana", "Carlos", "Ana", "Beatriz",  "Carlos"]

//{ Ana: 3, Carlos: 2, Beatriz: 1}
//Crear una funciona que me cuente cuantos votos tiene cada uno de los usuarios

const votosContados = (votos = []) => votos
    .reduce((acc, voto) => 
        /*
        if(!acc[voto])(
            acc[voto]
        )
        acc[voto].push(acc[voto]+1)
        return acc;
        */
        acc[voto]= (acc[voto] || 0)+1
        //acc[voto] ? acc[voto]++ : acc[voto] = 1
        
    , {})
