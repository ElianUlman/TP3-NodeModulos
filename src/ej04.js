process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function obtenerPais(nombrePais) {

    try {
        const respuesta = await fetch(`https://restcountries.com/v3.1/name/${nombrePais}`);

        if (!respuesta.ok) {
            throw new Error("País no encontrado");
        }

        const datos = await respuesta.json();

        const pais = datos[0];

        console.clear()
        console.log("--- Información del País ---");
        console.log(`País: ${pais.name.common}`);
        console.log(`Capital: ${pais.capital ? pais.capital[0] : "N/A"}`);
        console.log(`Región: ${pais.region}`);
        console.log(`Población: ${pais.population.toLocaleString()}`);

    } catch (error) {
        console.error("Error:", error.message);
    }

}


obtenerPais("Argentina");
