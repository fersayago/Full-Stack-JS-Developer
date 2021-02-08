const formReg = document.forms.formulario; //invocamos al form desde el nombre
//const formReg = document.forms[0]; si no tiene nombre el form

formReg.addEventListener('submit', validar);

function validar(e){
  let form = e.target;
  let errores = [];

  // Buscamos errores
  /* if (formReg.elements.email.value == ""){ // el email esta vacio
    errores.push("Email esta vacio")
  }
  if (formReg.elements.email.value.includes("@")){ // el email no tiene @
    errores.push("Email no tiene arroba")
  } */

  // VALIDAMOS EL EMAIL CON REGEX
  let expRegEmail = /[a-z0-9_]+@[a-z]+\.[a-z]{2,3}/i; // objeto de expresion regular
  
  if (!expRegEmail.test(form.elements.email.value)){
    errores.push("El formato de emial no es correcto");
  }

  if (errores.length){ // el array tiene elementos?
    alert("Hay errores");
    console.log(errores);
    e.preventDefault(); // eliminamos el envio del formulario por defecto
  }
}