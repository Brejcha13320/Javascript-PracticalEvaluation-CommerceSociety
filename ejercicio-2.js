/**
  2.- Múltiplos de un número dado (10 ptos).
  Escribir el código que muestre en consola los múltiplos de un número entero
  dado(definido en una variable para ser manipulado) en una secuencia del 1 al 100.
  Ejemplo si el número dado es 3 sus múltiplos serían 3,6,9,12,15…..21, etc.
 */

let numeroEntero = 3;
let sizeSequence = 100;

for (let i = 0; i < sizeSequence; i++) {
  if (i >= numeroEntero && i % numeroEntero === 0) {
    console.log(i);
  }
}
