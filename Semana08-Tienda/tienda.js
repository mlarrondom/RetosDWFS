const ventas = [
  {
    cliente: 'Juan',
    productos: [
      { nombre: 'smartphone', cantidad: 1, precio: 350 },
      { nombre: 'laptop', cantidad: 1, precio: 800 },
    ],
  },
  {
    cliente: 'Ana',
    productos: [
      { nombre: 'smartphone', cantidad: 2, precio: 350 },
      { nombre: 'cámara', cantidad: 1, precio: 250 },
    ],
  },
  {
    cliente: 'Pedro',
    productos: [
      { nombre: 'laptop', cantidad: 1, precio: 800 },
      { nombre: 'cámara', cantidad: 2, precio: 250 },
    ],
  },
];

// Subtotal por venta
const subtotales = ventas.map(venta => {
    const subtotal = venta.productos
    .map(producto => producto.cantidad * producto.precio)
    .reduce((a, b) => a + b, 0);

    return  {...venta, subtotal};
});

console.log(`Subtotales por pedido: `, subtotales);


// Total de las ventas
const total = subtotales.reduce((acum, venta) => acum + venta.subtotal, 0);
console.log(total);


//Productos vendidos
const listadoProductos = ventas.map(venta => 
    venta.productos.map(producto => producto.nombre)).flat();

console.log(listadoProductos);


//Cantidad vendida por categoría
const cantidades = ventas
  .flatMap(venta => venta.productos)   // juntamos todos los productos de todas las ventas
  .reduce((acum, producto) => {
    // si el producto ya existe, sumamos la cantidad
    if (acum[producto.nombre]) {
      acum[producto.nombre] += producto.cantidad;
    } else {
      // si no existe, lo inicializamos
      acum[producto.nombre] = producto.cantidad;
    }
    return acum;
  }, {});  // {} es el objeto inicial

console.log(cantidades);