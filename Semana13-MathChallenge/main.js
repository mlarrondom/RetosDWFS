// Valores de monedas permitidos
const monedas = [1, 5, 7, 9, 11];

// Función que calcula el mínimo número de monedas
function MathChallenge(num) {
  const dp = Array(num + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= num; i++) {
    for (let moneda of monedas) {
      if (i - moneda >= 0) {
        dp[i] = Math.min(dp[i], dp[i - moneda] + 1);
      }
    }
  }

  return dp[num];
}

let num;  

// Validar que el numero sea entero positivo
do {
  num = Number(prompt(`Ingresa un número entero positivo`));
  console.log(num);
} while (typeof num !== "number" || !Number.isInteger(num) || num <= 0);


// Mostrar resultado
const resultado = MathChallenge(num);
console.log(`El número mínimo de monedas para ${num} es: ${resultado}`);