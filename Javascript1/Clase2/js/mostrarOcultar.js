//ubicar el elemento en el DOM

var caja = document.getElementById('caja')


//funciones que ocultan y muestran el elemento

function mostrar() {
    //opacity = '1';
    //visibility = 'visible';
    //display = 'block';
    caja.style.display = 'block';
}

function ocultar() {
    //opacity = '0';
    //visibility = 'hidden';
    //display = 'none';
    caja.style.display = 'none';
}

function mostrarocultar(){
    if (caja.style.display == 'none') {
        caja.style.display = 'block';
    }
    else {
        caja.style.display = 'none';
    }
}