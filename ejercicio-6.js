/**
  Ejercicio bonus - Convertir caracteres a mayúsculas. (15 ptos).
  Diseñar un código que logre convertir caracteres a mayúsculas hasta encontrar un punto, solo
  los caracteres previos al Primer punto el resto se quedan en minúsculas, muestra en consola el
  antes y el después.
 */

let cadena = "www.techacademy.com";
let cadenaArray = cadena.split("");
let newCadenaArray = [];
let newCadena = "";
let point = false;

//for
for (let i = 0; i < cadenaArray.length; i++) {
  caracter = cadenaArray[i];

  if (point) {
    newCadenaArray.push(caracter.toLowerCase());
  } else {
    newCadenaArray.push(caracter.toUpperCase());
  }

  if (caracter === ".") point = true;
}

//foreach
// cadenaArray.forEach((letra) => {
//   if (point) {
//     newCadenaArray.push(letra.toLowerCase());
//   } else {
//     newCadenaArray.push(letra.toUpperCase());
//   }

//   if (letra === ".") point = true;
// });

newCadena = newCadenaArray.join("");

console.log(`Entrada ${cadena}`);
console.log(`Salida ${newCadena}`);
