let catalogo = [];

// Función de declaración
function agregarProducto (nombre, precio) {
    catalogo.push({nombre, precio});
    console.log(`Se ha agregado correctamente el producto ${nombre} con su precio $ ${precio}.`);
}

// Función de expresión
const eliminarProducto = function(nombre) {
    const index = catalogo.findIndex(c => c.nombre === nombre);
    if (index === -1) {
        console.log("Producto no encontrado")
    } else {
        catalogo.splice(index, 1);
        console.log(`Producto ${nombre} eliminado correctamente.`);
    }
}

// Función anónima
const buscarProducto = function(nombre){
    const producto = catalogo.find (c => c.nombre === nombre);
    console.log(`El producto es ${producto.nombre} y su precio es $ ${producto.precio}.`);
}

// Función de flecha
const mostrarProductos  = () => {
        console.log("Lista de productos:");
    if (catalogo.length === 0) {
        console.log("No hay productos registrados")
    } else {
        catalogo.forEach( c => {
            console.log(`- ${c.nombre}: ${c.precio}.`)
        });
    }
}


agregarProducto("Laptop", 1200);
agregarProducto("Mouse", 25);
agregarProducto("Teclado", 45);
agregarProducto("Monitor", 300);
agregarProducto("Impresora", 150);

eliminarProducto("Notebook");
eliminarProducto("Teclado");

buscarProducto("Impresora");

mostrarProductos();


