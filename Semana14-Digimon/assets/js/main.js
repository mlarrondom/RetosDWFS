// Probar conexión con HTML y fetch
console.log("manin.js se está ejecutando");

async function probarFetch() {
    const resp = await fetch("https://digi-api.com/api/v1/digimon");
    const data = await resp.json();

    console.log(`Total de digimons recibidos ${data.content.length}`);

    // tomar el primero
    const primero = data.content[0];
    console.log(primero);
    console.log(primero.image);
}

// probarFetch();


// Mostrar Digimon en una tarjeta

function crearColumnaConCard ({name, id, images}) {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    const imgUrl = images && images[0] ? "No se encontró la imagen";
 
}