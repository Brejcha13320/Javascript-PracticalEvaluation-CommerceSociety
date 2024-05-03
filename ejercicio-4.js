/**
  4.- Invertir un array (10 ptos).
  Escribe un código en el cual dado un arreglo , muestre en consola el arreglo original y el
  mismo pero invertido.
  Ejemplo arreglo original: [23,5,34,56,98,"cadena",7] el arreglo invertido:
  [7,"cadena",98,56,34,5,23].
 */

let arregloOriginal = [23, 5, 34, 56, 98, "cadena", 7];
let arregloInvertido = [];
let j = 0;

for (let i = arregloOriginal.length - 1; i >= 0; i--) {
  arregloInvertido.push(arregloOriginal[i]);
  j++;
}

console.log(`Arreglo Original ${arregloOriginal}`);
console.log(`Arreglo Invertido ${arregloInvertido}`);
