//creamos las variables que vamos a utilizar variable
var numero = prompt('Ingrese un numero');
var numero2 = prompt('Ingrese otro número');
var texto = document.getElementById('texto')

//ubicamos el elemento deltro del DOM
//parseInt() sirve para convertir un string a número
texto.innerHTML = parseInt(numero) + parseInt(numero2);

