/**
  1.- Random par o impar(10 ptos).
  Generar un código el cual genere 5 números aleatorios(Math.random()*100) enteros y
  devuelva si el número generado es par o impar.
  Ejemplo:
  Primera iteración: numeroGenerado = 5 // el número es impar
  Segunda iteración: numeroGenerado = 12 // el número es par
 */

let size = 5;
for (let x = 0; x < size; x++) {
  let numeroGenerado = Math.floor(Math.random() * 100);
  if (numeroGenerado % 2 === 0) {
    console.log(`Numero Generado ${numeroGenerado} es Par`);
  } else {
    console.log(`Numero Generado ${numeroGenerado} es Impar`);
  }
}
