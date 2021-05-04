/* OTRAS MANERAS DE CAPTURAR ELEMTOS DEL DOM
 BUSQUEDAS EN VIVO (si se actualiza el contenido, se actualiza la busqueda):
- document.getElementById
- document.getElementsByName
- document.getElementsByClass
- document-getElementByTagName
 */



// query selector

var todosParrafos = document.getElementsByTagName("p")
console.dir(todosParrafos);

var todosTitulos = document.getElementsByTagName("h1")
console.dir(todosTitulos)

var caja = document.querySelector("#caja");   // nodoHTML o null
var parrafo = document.querySelector("p");    //selector atrapa p,p,p,p,p, pero qs solo devuelve el primero
var enlace = document.querySelector("a");     //devuelve null porque no hay
var parrafos = document.querySelectorAll("p") //devuelve todos los p QSA devuelve un array-like con todo lo capturado

// querySelectorAll =/= getElementByTagName
// si sigo agregando elementos P QSA no los va a contar pero getElementByTagName, si.

for (var i = 0; i <todosParrafos.length; i++){
  todosParrafos[i].style.background = "yellow";
}


/* for (var i = 0; i <parrafos.length; i++){
  parrafos[i].style.color = "red";
} */
parrafos.forEach(function(parrafo){
  parrafo.style.color = "red";

})



