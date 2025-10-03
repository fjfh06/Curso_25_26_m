/**
 * 
 * @param {Object} products - Objeto Data
 * @returns {Object} - Objeto con información extraída
 */
export const extraerData = (products) => {
    const {
        nombre,
        fabricante : { nombre:nombreFabricante, contacto },
        especificaciones:{ ram }
    } = products;

    return {
        nombre,
        nombreFabricante,
        contacto,
        ram,
    };
};

// Funcion maxRam pasado como parametro un array de productos y me devuelva el nombre del producto que tiene la maxima ram

export const maxRam = ArrayProducts => {
    ArrayProducts.map(extraerData).reduce((acc, product, index, arrayProducts) =>{
        ram.slice(-2)>acc?ram.slice(-2):acc
    }, 0)
}