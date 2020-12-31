function enviarDatosAlServidor(event) {
  document.getElementById("valNombre").innerHTML = "";
  document.getElementById("valApellido").innerHTML = "";
  document.getElementById("valCorreo").innerHTML = "";
  document.getElementById("valCelular").innerHTML = "";

  let expresion = new RegExp("^[A-Z][a-z]+$");
  let mailExp = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );
  let celExp = new RegExp("^[0-9]{10}$");

  let nombre = document.getElementById("txtNombre").value;
  if (nombre.length == 0) {
    document.getElementById("valNombre").innerHTML = "Falta el nombre";
    event.preventDefault();
  } else if (!expresion.test(nombre)) {
    document.getElementById("valNombre").innerHTML =
      "El nombre debe empezar con mayuscula";
    event.preventDefault();
  }

  let apellido = document.getElementById("txtApellido").value;
  if (apellido.length == 0) {
    document.getElementById("valApellido").innerHTML = "Falta el apellido";
    event.preventDefault();
  } else if (!expresion.test(apellido)) {
    document.getElementById("valApellido").innerHTML =
      "El apellido debe empezar con mayuscula";
    event.preventDefault();
  }

  let correo = document.getElementById("txtCorreo").value;
  if (correo.length == 0) {
    document.getElementById("valCorreo").innerHTML = "Falta el correo";
    event.preventDefault();
  } else if (!mailExp.test(correo)) {
    document.getElementById("valCorreo").innerHTML =
      "El formato del correo es incorrecto";
    event.preventDefault();
  }

  let celular = document.getElementById("txtCelular").value;
  if (celular.length == 0) {
    document.getElementById("valCelular").innerHTML =
      "Falta el numero de celular";
    event.preventDefault();
  } else if (!celExp.test(celular)) {
    document.getElementById("valCelular").innerHTML =
      "El formato del numero de celular es incorrecto";
    event.preventDefault();
  }
}
