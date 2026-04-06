import fs from 'fs/promises';

async function generarCSV() {
    try {
        const data = await fs.readFile('./src/productos.json', 'utf-8');
        const productos = JSON.parse(data);

        let contenidoCSV = "nombre,precio\n";

        productos.forEach(producto => {
            contenidoCSV += `${producto.nombre},${producto.precio}\n`;
        });

        await fs.writeFile('./productos.csv', contenidoCSV);

        console.log("Archivo 'productos.csv' generado con éxito");

    } catch (error) {
        console.error("Hubo un error al generar el CSV:", error.message);
    }
}

generarCSV();