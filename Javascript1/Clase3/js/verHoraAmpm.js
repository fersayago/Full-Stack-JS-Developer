//ubicar elemento/s dentro del DOM

var txtRelojampm = document.getElementById('txtRelojampm');


//generar funcion/es de control

function mostrarReloj(){

    //creamos objeto de fecha

    var fecha = new Date();

    //obtenemos, horas, minutos y segundos

    var ampm = "AM";

    var hora = fecha.getHours();
    if (hora > 12) {
        ampm = 'PM';
        hora = hora - 12;
    }
    if (hora < 10) {
        hora = '0' + hora;
    }

    var minutos = fecha.getMinutes();
    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    
    var segundos = fecha.getSeconds();
    if (segundos < 10) {
        segundos = '0' + segundos;
    }



    //mostrar reloj en el span
    txtRelojampm.innerText = hora + ':' + minutos + ':' + segundos + " " + ampm;
}

mostrarReloj();

//actualizamos reloj
setInterval(mostrarReloj, 1000);
