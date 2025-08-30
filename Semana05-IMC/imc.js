function calculadoraIMC(){
    // solicitar al usuario que ingrese su peso y altura
    const ingresoPeso = prompt ("Ingrese su peso en kg:");
    const ingresoAltura = prompt ("Ingrese su altura en metros:");

    const peso = parseFloat(ingresoPeso); // convertir el peso a número decimal
    const altura = parseFloat(ingresoAltura); // convertir la altura a número decimal

    console.log(peso);
    console.log(altura);

    let imc;
    imc = peso / (altura * altura); // calcular el IMC
    console.log(`Su IMC es: ${imc.toFixed(2)}`)

    // clasificar el estado según el IMC
    if (imc < 18.5) {
        console.log("Usted está bajo peso.");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Usted tiene un peso normal.");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Usted tiene sobrepeso.");
    } else if (imc >= 30 && imc < 34.9) {
        console.log("Usted tiene obesidad grado 1.");
    } else if (imc >= 35 && imc < 39.9) {
        console.log("Usted tiene obesidad grado 2.");
    } else {
        console.log("Usted tiene obesidad grado 3.");
    }
}

// llamar a la función
calculadoraIMC();

