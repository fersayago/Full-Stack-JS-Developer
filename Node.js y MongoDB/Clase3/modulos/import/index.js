// NUEVA FORMA DE INTEGRAR MODULOS EN UN PROYECTO


/* import ES modules (export default)
  import operaciones from './api/operaciones.js' */

/* import ES modules (export)
import * as operaciones from './api/operaciones.js'


console.log('Inicio de cálculos...')
console.log(operaciones.suma(10,3))
console.log(operaciones.resta(10,3))
console.log(operaciones.mult(10,3))
console.log(operaciones.div(10,3))
console.log(operaciones.mod(10,3))
console.log('\nFin de cálculos.') */




import {suma, resta, mult, div, mod} from '.api/operaciones.js'

console.log('Inicio de cálculos...')
console.log(suma(10,3))
console.log(resta(10,3))
console.log(mult(10,3))
console.log(div(10,3))
console.log(mod(10,3))
console.log('\nFin de cálculos.')