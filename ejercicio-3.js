/**
  3.- Cuenta cuantas veces se repite un caracter en especifico (20 ptos).
  Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
  veces se repite un carácter dado en dicha cadena de texto.
  Ejemplo la cadena dada es “hola como estas” y el carácter dado para saber cuantas veces
  se repite es "o" entonces la consola debería de mostrar: el carácter "o" se repite 3 veces en
  "hola como estas".
 */

let cadenaTexto = "hola como estas";
let caracter = "o";
let countCaracter = 0;

//string to array
let array = cadenaTexto.split("");

//for cicle
for (let i = 0; i < array.length; i++) {
  if (array[i] === caracter) countCaracter++;
}

//foreach cicle
// array.forEach((letra) => {
//   if (letra === caracter) countCaracter++;
// });

console.log(
  `El carácter "${caracter}" se repite ${countCaracter} veces en "${cadenaTexto}"`
);
