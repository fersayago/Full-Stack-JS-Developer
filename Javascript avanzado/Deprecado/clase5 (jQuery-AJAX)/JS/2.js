function eliminarTarea(boton) {
  //ELIMINA EL ELEMENTO LI CON EL THIS
  let li = boton.parentNode;
  let ul = boton.parentNode.parentNode;
  ul.removeChild(li);
}

function agregarTarea(tareaRecibida) {
  $("ul").prepend(`<li class="list-group-item">
    <button onclick="eliminarTarea(this)" class="btn btn-danger"> X </button>
    ${tareaRecibida}
    </li>`);
}
$(document).ready(() => {
  //Como tengo un boton solo puedo referirme a el
  console.log("se cargo la pagina");
  $("#btnAgregar").click(() => {
    //let tarea = document.querySelector("button")[0].value
    let tarea = $("input").val();

    if (tarea.length > 0) {
      //var li = document.CreateElement("li")
      //li.innerHTML = ...
      //document.querySelector("ul")[0].appendChild(li)
      agregarTarea(tarea);
      //document.querySelector("button")[0].value= '';
      $("input").val("");
    }
  });

  //REEMPLAZO EL XHR (HttpRequest) POR EL LLAMADO A UNA API DE PRUEBA QUE PUEBLE LA LISTA DE TAREAS
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "GET",
  }).done((resp) => {
    for (var tarea of resp) {
      //PARA CONVOCAR EL TITULO ELEGIMOS DENTRO DE LA LLAMADA EL TITLE DE CADA TODO
      agregarTarea(tarea.title);
    }
  });
});
