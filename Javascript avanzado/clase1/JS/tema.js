var boton = document.getElementById("accion");
var body = document.body;

boton.onclick = function(params) {
  if (body.classList.contains("oscuro")){
    body.classList.remove("oscuro");
    boton.textContent = "Tema Oscuro"

  }else {
    body.classList.add("oscuro");
    boton.textContent = "Tema Claro"
  }
}