//ubicar elemento/s dentro del DOM

var caja = document.getElementById('caja');


//modificiones sobre la caja

caja.style.position = 'relative';
caja.style.top = '100px';
caja.style.left = '100px';
caja.style.borderRadius =  '10px';

var grados = 0;


//creamos funcion de control

function rotar(){
    grados = grados + 1;

    //cambio de color de la caja
    var r = Math.random() * 255; //entre 0 y 1 -> 255
    var g = Math.random() * 255;
    var b = Math.random() * 255;

    caja.style.transform = 'rotate('+grados+'45deg)';
    caja.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
}



//invocamos la funcion

rotar();

//actualizamos la funcion

setInterval(rotar, 100);