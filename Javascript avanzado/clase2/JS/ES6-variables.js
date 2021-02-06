// ---------------
// ------ES5------ VAR
// ---------------

var aux = 20; // ensucian wndow (se agregan como propiedades del obj window)

// ... quiero crear otra variable

var aux = 30; // JS entiende que solo quiero reasignar el varlo a aux
console.log(aux);

// ---------------
// ------ES6------ LET
// ---------------

// se crea let como un sustituto de var que es mas eficiente en la memoria y aparte no ensucia el objeto window
// console.log(window.valor) // "undefined"
let valor = 256;
// let valor = 365; // ERROR
// si quiero cambiar el valor me tira un error avisandome que ya declare variable


// ---------------
// ------ES5------ VAR
// ---------------

var IVA = 21;
IVA++;
console.log(IVA);

// ---------------
// ------ES6------ CONST
// ---------------

// Es mas barata de almacenar ya que es solo un valor de lectura que en ningun momento va a ser modificada

const PI = 3.1416;
// PI++ // ERROR
console.log(PI);

const caja = document.getElementById("caja");
caja.textContent = "Desde JS";
caja.style.backgroundColor = "orange";