/* 
 * Tipos de dato "object" que vengan con el lenguaje
 * let fecha = new Date();
 * let regx = new regExp();
 * let file = new File();
 */


// Primera forma de definir objetos definiendo objetos
//definiendo objetos "anonimos" estilo json
let pers = {};
pers.nombre =  "Esteban";
pers.mostrar = function(){
  console.log(`Hola soy ${this.nombre}`)
}

pers.mostrar()
console.log(typeof pers);
console.log(pers.constructor.name);

//Segunda forma de definir un objeto

function Persona(nom){
  this.nombre = nom;
  this.apellido = "Smith";
  this.mostrar = function() {
    console.log(`Hola soy ${this.nombre} y mi apellido es ${this.apellido}`)
  }
}


//TODO: FALTA TERCERA FORMA

//Cuarta forma de definir objetos (forma de ECMAScript es nueva)

class Persona {
  nombre;
  apellido;

  constructor (nom, ape){
    this.nombre = nom;
    this.apellido = ape;
  }

  mostrar(){
    console.log(`Hola soy ${this.nombre} y mi apellido es ${this.apellido}`)
  }
}
