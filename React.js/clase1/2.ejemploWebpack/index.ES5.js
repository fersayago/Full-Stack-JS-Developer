'use strict';

console.log('-------------- index.ES5.js -------------')

var mensaje = 'Hola Mundo!';
console.log(mensaje);

var sumar = function sumar(a, b) {
  return a + b;
};
var dobleDe = function dobleDe(a) {
  return 2 * a;
};

console.log('La suma de ' + sumar(14, 3));
console.log('El doble de 8 es ' + dobleDe(8));

console.log('-----------------------------------------')
