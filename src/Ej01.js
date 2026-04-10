import fs from "fs";
fs.readFile('./src/productos.json', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const productos = JSON.parse(data);

    console.log('Lista de productos:');
    productos.forEach(producto => {
        console.log(`- ${producto.nombre}: $${producto.precio}`);
    });
});
