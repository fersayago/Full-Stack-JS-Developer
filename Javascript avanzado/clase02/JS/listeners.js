
// tomamos los botones
let btnbad = document.getElementById("accionBad");
let btn1 = document.getElementById("accion1");
let btn2 = document.getElementById("accion2");

// creamos una funcion para ejecutar con el click
function accionx() {
  alert("Hola mundo");
}

function acciony() {
  alert("Chau mundo");
  btn1.removeEventListener("click", accionx); //saco la accionx para que no ocupe memoria
}


// NO ES RECOMENDABLE
btnbad.onclick = accionx;

// ES PREFERIBLE USAR UN EVENT LISTENER
// se permite agregar mas de una funcion al evento
btn1.addEventListener("click", accionx); // se declara relacion: elemHTML - evento -> function
btn1.addEventListener("click", acciony);


// creo otra funcion que quiero que se ejecute cuando hago foco en el elemento
function pintarTodo(){
  document.body.style.backgroundColor = "lime";
}

btn1.addEventListener("focus", pintarTodo);

//creo otra funcion que cuando pierdo el foco se pinte de naranja
function despintarTodo(){
  document.body.style.backgroundColor = "orange";
}

btn1.addEventListener("blur", despintarTodo);

btn2.addEventListener("click", function(){
  // el segundo boton lo uso para quitar las funciones del primero
  btn1.removeEventListener("focus", pintarTodo);
  btn1.removeEventListener("blur", despintarTodo);
  document.body.style.backgroundColor = "white";
})