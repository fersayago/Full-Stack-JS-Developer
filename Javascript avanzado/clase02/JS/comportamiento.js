const enlace = document.querySelector("a");
const marco = document.querySelector("iframe");

enlace.addEventListener("click", modificarMarco);

function modificarMarco(e){ // se estila usar "e" para el objeto de evento
  e.preventDefault(); // evita que se abra la pagina al hacer click sobre "a"
  marco.src = enlace.href;
}

/* 
CALLBACK: un parametro que espera una funcion como valor para ejecutarla dentro de la funcion en la que estamos


function addEventListener(evento, callback){
  if (si ocurre el evento en el elemento){
    var objEvento = { ... }
    callback(); 
  }
}

var aux = function(){};
sumar(10, aux);

function sumar(a, b){
  console.log(a); // 10 function(){}
}
*/