
// Capturar elemento mediante ID (HTMLElement o nodo HTML)
var refH1 = document.getElementById("titulo");

// Para ver el contenido
console.log(refH1);

// Para ver los valores y propiedades
console.dir(refH1);

// Modificar el contenido HTML de un tag
refH1.innerHTML = "Javascript <i>run</i>!";

// A diferencia de innerHTML esta no recibe etiquetas sino
// que modifica literalmente
refH1.innerText = "<i>Esto</i> no va a estar en italica, sera todo texto"

// Esta ultima es igual a innerText pero es mas optimo ya que no
// analiza el texto en busca de etiquetas que anular.
refH1.textContent = "<i>Esto</i> tampoco toma etiquetas como 'innerText'"


// MANIPULACION ESTILOS INLINE
refH1.style.color = "orangered";
refH1.style.backgroundColor = "yellow";
refH1.style.padding = "10px 20px";

// MANIPULACION DE CLASES
// agrega clase con el valor de "resaltado"
refH1.className = "resaltado redondeado seleccionado";
// si se quieren agregar varias clases a un elemento
// conviene usar este otro metodo
refH1.classList.add("seleccionado");
refH1.classList.add("oculto");
// con este metodo tambien se puede quitar clases de un elemento
refH1.classList.remove("oculto");

// AGREGAR CONDICIONES

// Contains devuelve un booleano lo cual permite chequear
// si el elemento HTML contiene la clase resaltado, remueve
// la clase seleccionado
if (refH1.classList.contains("resaltado")){
  refH1.classList.remove("seleccionado");
  refH1.classList.remove("magica"); // no pasa nada ya que no existe
}

// para reemplazar una clase se puede usar
refH1.classList.replace("redondeado", "enmarcado");


// MANIPULACION DE COMPORTAMIENTO

// podemos darle eventos para ejecutar funciones
refH1.onclick(function(){
  alert("se hizo click");
})