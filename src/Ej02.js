import { log } from "console";
import fs from "fs";
function agregarProducto(nombre = "Edu", precio) {
    fs.readFile('./src/productos.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        let productos = JSON.parse(data);

        const nuevoProducto = { "nombre": nombre, "precio": precio };
        productos.push(nuevoProducto);

        fs.writeFile("./src/productos.json", JSON.stringify(productos, null, 2), (err) => {
            if (err) {
                console.error('Error al guardar:', err);
                return;
            }

            console.log('Producto agregado correctamente');
        });
    });
}

agregarProducto("Monitor", 120000)