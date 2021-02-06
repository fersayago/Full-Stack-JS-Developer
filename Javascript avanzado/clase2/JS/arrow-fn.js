// ---------------
// ------ES5------
// ---------------

// STATEMENT FUNCTION
function sumarStatement() { 
  console.log(a, b);
  return a+b;
}

// EXPRESSION FUNCTION
var sumarExpression = function(a,b) {
  console.log(a, b);
  return a+b;
}

// ---------------
// ------ES6------
// ---------------

// ARROW FUNCTION
const sumarArrow = (a, b) => {
  console.log(a,b);
  return a+b;
}

console.log("-----arrowFunction-----")
console.log(sumarArrow(40, 20));

// ---------------
// ------ES5------
// ---------------

// EXPRESSION FUNCTION
var restar = function(a,b) {
  return a-b;
}

// ---------------
// ------ES6------
// ---------------

// ARROW FUNCTION en 1 linea
var restarArrow = (a,b) => a-b;

// ---------------
// ------ES5------
// ---------------

var devuelveConfigES5 =  function(){
  return { name: "Juan"};
}

// ---------------
// ------ES6------
// ---------------

// Para devolver un objeto sin que se confunda con una funcion hay que envolver los corchetes del objeto entre parentesis
const devuelveConfigES6 = () => ({ name: "Juan" });

