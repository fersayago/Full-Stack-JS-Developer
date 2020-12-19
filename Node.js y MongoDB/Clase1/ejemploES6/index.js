/* --------------------------------- */
/*          var, let y const         */
/* --------------------------------- */

var a = 5;
var b = 6;
var c = a + b;

console.log(c);

console.log("---------------")

function varTest() {
  var x = 31;
  if (true) {
    var x = 71;
    console.log(x)
  }
  console.log(x)
}
varTest()

console.log("---------------")
function letTest() {
  let x = 31;
  if (true) {
    let x = 71;
    console.log(x)
  }
  console.log(x)
}
letTest()

console.log("---------------")
function constTest() {
  const x = 31;
  if (true) {
    const x = 71;
    // NO! funciona!
    console.log(x)
  }
  console.log(x)
}
constTest()

/* --------------------------------- */
/*  Funciones tradicionales y flecha */
/* --------------------------------- */

console.log("---------------")

/*
function suma(a,b){
  return a+b
}
*/

//si almaceno una funcion en una constante me permite no pisar la mismoa con otro valor
//ARROW FUNCTION es una funcion anonima
const suma = (a,b) => a + b

//arrow function con un solo valor
const dobleDe = (a) => 2*a

//pasar un string a mayuscula
const aMayuscula = str => str.toUpperCase()

//calcular con dos valores de respuesta
const mayorDeEdad = edad => edad>=18? 'SI':'NO'

//numero random entre 1 y 10
const obtRandom1y10 = () =>{
  let random = Math.random()
  random *= 10
  random = parseInt(random)
  return ++random
}

//devolver un objeto
const getPersona = () => {
  return {nombre: "Fer", edad: 28}
}
//misma funcion pero arrow
const getPersonaArrow = () => ({nombre: "Flecha", edad: 24})

//funcion vaclia
const getSaludo = () => {
  return "Hola que tal"
}

// Template String `` backtic
console.log(`
---------------------------------------------
La suma da ${suma(17,3)}
El doble de 6 es ${dobleDe(6)}
Convertir a mayusculas ${aMayuscula("holis")}
Es mayor de edad? ${mayorDeEdad(16)}
Numero aleatorio entre 1 y 10: ${obtRandom1y10()}
Persona: ${JSON.stringify(getPersona())}
Saludo: ${getSaludo()}
---------------------------------------------
`)

const logConArrow = () => console.log("cerramos con un console log por arrow")

logConArrow();



