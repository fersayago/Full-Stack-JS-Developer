// INTEGRAR UN MODULO EN UN PROYECTO

// import commonJS
const operaciones = require('./api/operaciones')

console.log('Inicio de cálculos...')
console.log(operaciones.suma(10,3))
console.log(operaciones.resta(10,3))
console.log(operaciones.mult(10,3))
console.log(operaciones.div(10,3))
console.log(operaciones.mod(10,3))
console.log('\nFin de cálculos.')