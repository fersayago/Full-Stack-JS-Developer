// ECMAScript 5

// Definir o declarar una variable
var total;
var luz;

// Asignar un valor a una variable
luz = 1000;

// Declarar y asignar a la vez
var agua = 500;
var gas = 500;

// Asignar un valor a una variable
total = agua + luz + gas;

// Mostrar el resultado por consola
console.log(total);

// --------------------------
// datos que puedo almacenar en una variable
// PRIMITIVOS
var cantidad = 34;
var precio = 50.85;
var encendido = true; // o false
var direccion;
console.log(direccion); // undefined : nunca tuvo valor
var nombre = "Luis";
nombre = null;
console.log(nombre); // null : no valor (limpiar)

// COMPLEJOS
var colores = ["red", "orange", "violet"]; // ARRAY
var persona = {
  nombre: "Juan",
  edad: 17,
  estudios: true,
};                            // OBJETO : conjunto de variables

var saludar = function(){ 
  alert("Hola")
};                          // FUNCION

//----------------------------------
//TODO: CONTINUAR 1:18:30