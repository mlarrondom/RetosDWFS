let primerBoton = null;
let segundoBoton = null;
let aciertos = 0;

const colores = ['red', 'blue', 'green', 'yellow', 'purple'];
const pares = [...colores, ...colores]; // los duplicamos → 10 en total

function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // índice aleatorio
        [array[i], array[j]] = [array[j], array[i]];   // intercambia posiciones
    }
}

mezclar(pares);

// Se crea un array en el documento, con todos los elementos clase 'btn-color'
const botones = document.querySelectorAll('.btn-color');
console.log(botones);
let totalAciertos = botones.length/2;
const mensaje = document.getElementById('mensaje');


botones.forEach((boton, i) => {
  boton.dataset.color = pares[i];  // asigna el color aleatorio
  boton.style.backgroundColor = '#AAAAAA'; // color inicial
});


// Función que se ejecutará al hacer click
function manejarClick (event) {
    const boton = event.currentTarget; // Obtiene el botón que está seleccionado
    const color = boton.dataset.color; // Obtiene el color del botón seleccionado
    boton.style.backgroundColor = color; // Muestra el color
    
    // Asociar el botón seleccionado a primer o segundo botón (el que esté disponible)
    if (!primerBoton) {
        primerBoton = boton;
        return;
    } else {
        segundoBoton = boton;
    }
    
    console.log(`Color primer botón: ${primerBoton.dataset.color}`);
    console.log(`Color segundo botón: ${segundoBoton.dataset.color}`);
    
    // En caso de ser distintos, espera 3 segundos y vuelve a mostrar los botones
    if (primerBoton.dataset.color !== segundoBoton.dataset.color) {
        
        console.log('Esperar 3 segundos')
        
        setTimeout(() => {
            // Vuelve los colores a gris
            primerBoton.style.backgroundColor = '#AAAAAA';
            segundoBoton.style.backgroundColor = '#AAAAAA';
            
            // Vuelve a mostrar los botones
            primerBoton.classList.remove('oculto');
            segundoBoton.classList.remove('oculto');
            
            // Limpia las variables de primer y segundo botón
            primerBoton = null;
            segundoBoton = null;
        }, 1000);
    }
    
    // En caso de ser iguales, va contando los aciertos
    if (primerBoton.dataset.color === segundoBoton.dataset.color){
        setTimeout(() => {
            primerBoton.classList.add('oculto');
            segundoBoton.classList.add('oculto');
            primerBoton = null;
            segundoBoton = null;
            aciertos = aciertos + 1;
            console.log(`Aciertos: ${aciertos}`);
        }, 1000);
        
        if (aciertos === totalAciertos) {
            mensaje.textContent = '🎉 Felicitaciones, has encontrado todas las parejas 🎉';
        }
        return;
    }
};

// Recorre el array de botones y por cada uno, ejecutará la función manejarClick
botones.forEach((boton) => {
    boton.addEventListener('click', manejarClick);
});

