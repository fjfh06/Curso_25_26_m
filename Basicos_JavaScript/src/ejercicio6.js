const productos = [
    { id: l, nombre: 'Laptop', precio: 1200, stock: 5, categoria: "Tecnologia"}, 
    { id: 2, nombre: 'Camiseta', precio: 35, stock: 15, categoria: "Ropa"}, 
    { id: 3, nombre: 'Monitor', precio: 300, stock: 0, categoria: "Tecnologia" }, 
    { id: 4, nombre: 'Libro', precio: 20, stock: 50, categoria: 'Literatura'}, 
    { id: 5, nombre: 'Móvil', precio: 800, stock: 10, categoria: 'Tecnologia'}, 
    { id: 6, nombre: "Pantalón", precio: 60, stock: 5, categoria: "Ropa"}
];
// Se pide:
// 1.- Obtener un array con los nombres de todos los productos que están agotados. 
// 2.- Calcular el valor total del inventario (precio * stock) de todos los productos 
// 3.- Filtrar los productos que pertenecen a la categoria 'Tecnologia' y tienen un precto mayor a 500
// 4.- Crear un nuevo array productos aplicando un descuento del 10% a todos Los productos de la categoria 'Ropa'.