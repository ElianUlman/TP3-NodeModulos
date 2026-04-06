import fs from 'fs/promises';

async function buscarProducto(nombre) {
    try {
        const data = await fs.readFile('./src/productos.json', 'utf-8');
        const productos = JSON.parse(data);

        const productoEncontrado = productos.find(producto =>
            producto.nombre.toLowerCase() === nombre.toLowerCase()
        );

        if (productoEncontrado) {
            console.log("Producto encontrado");
            console.log(`Nombre: ${productoEncontrado.nombre}`);
            console.log(`Precio: ${productoEncontrado.precio}`);
        } else {
            console.log("Producto no encontrado");
        }

    } catch (error) {
        console.error("Error al procesar la búsqueda:", error.message);
    }
}

buscarProducto("Mouse");