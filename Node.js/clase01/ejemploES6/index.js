/* --------------------------------- */
/*          var, let y const         */
/* --------------------------------- */

var a = 5;
var b = 6;
var c = a + b;

console.log(c);

var d = 9;
d = 10;
console.log(d);

const PI = 3.1415926;
// PI = 1.2;   <- NO SE PUEDE YA QUE ES CONSTANTE
console.log(PI);

for (var i = 0; i<5; i++){
  console.log(i);
}
// console.log(i); <- NO SE PUEDE YA QUE "I" ESTA DECLARADO DENTRO DEL SCOPE DEL FOR


console.log("---------------------------------")

function varTest(){
  var x = 31;
  if (true) {
    var x = 71;
    console.log(x);
  }
  console.log(x);
}

varTest()

console.log("---------------------------------")

function letTest(){
  let x = 31;
  if (true) {
    let x = 71;
    console.log(x);
  }
  console.log(x);
}
letTest()

console.log("---------------------------------")

const getSaludo = () => console.log('Hola que tal!');
getSaludo()

// ASIGNAR LAS FUNCIONES EN UNA CONSTANTE ME PERMITE NO SOBREESCIBIRLAS
const suma = (a,b) => a + b;
const dobleDe = a => 2*a;
const toUpper = str => str.toUpperCase();
const mayorDeEdad = edad  => edad >=18 ? 'SI' : 'NO';
const getRandomOneToTen = () => {
  let random = Math.random()  // 0 ... 0.9999...
  random *= 10;               // 0 ... 9.9999...
  random = parseInt(random)   // 0 ... 9
  return ++random             // 1 ... 10
}
const getPersona = () => ({nombre: 'Ana', edad: 23}) // PARA DEVOLVER UN OBJETO LO PONGO ENTRE PARENTESIS

// Usamos template string con los backtick ``
console.log(`---------------------------------
La suma da ${suma(17,3)}
El doble de 4 es ${dobleDe(4)}
ToUpper: ${toUpper("Hola!")}
¿Mayor de edad? ${mayorDeEdad(19)}
Numero aleatorio: ${getRandomOneToTen()}
Persona nombre: ${getPersona().nombre}
Persona edad: ${getPersona().edad}
Persona objeto: ${JSON.stringify(getPersona())}
---------------------------------
`);