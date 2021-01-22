// INTEGRAR UN MODULO EN UN PROYECTO

// import commonJS
const operaciones = require('./api/operaciones')

//importo retardos
const util = require('./util/retardos')

 /* ------------------------------------------------- */
/* Retardo sincronico (bloqueante) */ 

function retaroSincronico(){
  console.log('Inicio del retardo...', Date.now())
  
  util.retardoSync()
  console.log('Fin del retardo 1...', Date.now())

  util.retardoSync()
  console.log('Fin del retardo 2...', Date.now())

  util.retardoSync()
  console.log('Fin del retardo 3...', Date.now())
}

 /* ------------------------------------------------- */
/* Retardo asincronico - Callback (No bloqueante) */ 

function retardoCallback(){
  console.log('Inicio del retardo...', Date.now())
  util.retardoAsyncCallback(() =>{
    console.log('Fin del retardo...', Date.now())
  })
}

 /* ------------------------------------------------- */
/* Retardo Asincrónico - Promise (then/catch) (No bloqueante) */

function retardoThenCatch() {
  console.log('Inicio del retardo...', Date.now())

  util.retardoAsyncPromise()
  .then(() => {
    console.log('Fin del retardo 1...', Date.now())
    return retardoAsyncPromise()
  })
  .then(() => {
    console.log('Fin del retardo 2...', Date.now())
    return retardoAsyncPromise()
  })
  .then(() =>{
    console.log('Fin del retardo 3...', Date.now())
    return retardoAsyncPromise()
  })
}
  
 /* ------------------------------------------------- */
/* REtardo Asincronico - Promise (async/await) (No bloqueante) */

const retardoAsyncAwait = async () => {
  console.log('Inicio del retardo...', Date.now())

  await util.retardoAsyncPromise()
  console.log('Fin del retardo 1...', Date.now())

  await util.retardoAsyncPromise()
  console.log('Fin del retardo 2...', Date.now())

  await util.retardoAsyncPromise()
  console.log('Fin del retardo 3...', Date.now())
  
}


//retardoSincronico()
//retardoCallback()
//retardoThenCatch()
//retardoAsyncAwait()

//PARA EVITAR EL CALLBACKS HELL
retardoAsyncAwait()



console.log('Inicio de cálculos...')
console.log(operaciones.suma(10,3))
console.log(operaciones.resta(10,3))
console.log(operaciones.mult(10,3))
console.log(operaciones.div(10,3))
console.log(operaciones.mod(10,3))
console.log('\nFin de cálculos.')