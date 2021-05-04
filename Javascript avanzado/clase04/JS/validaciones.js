const formReg = document.forms.formulario;

formReg.addEventListener('submit', validar);

function validar(e){
  let form = e.target;
  let errores = [];

  // VALIDAMOS EL EMAIL CON REGEX
  let expRegEmail = /[a-z0-9_]+@[a-z]+\.[a-z]{2,3}/i; 

  if (!expRegEmail.test(form.elements.email.value)){
    errores.push("El formato de emial no es correcto");
  }

  if (errores.length){ 
    alert("Hay errores");
    console.log(errores);
    e.preventDefault(); 
  }
}