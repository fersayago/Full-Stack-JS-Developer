// ubicar elementos dentro del DOM

var txtDias = document.getElementById("dias");
var txtHoras = document.getElementById("horas");
var txtMinutos = document.getElementById("minutos");
var txtSegundos = document.getElementById("segundos");

// generar funcion o funciones de control

function cuentaRegresiva () {
    var fechaAhora  = new Date();
    var fechaFin = new Date(2020, 10, 23);
    
    // convertimos fechas a milisegundos
    var actual = fechaAhora.getTime();
    var evento = fechaFin.getTime();

    // calculamos el tiempo restante en milisegundos
    var restante = evento - actual;

    // obtenemos segundos, minutos, horas y dias
    var segundos = Math.floor(restante/1000);
    var minutos = Math.floor(segundos/60);
    var horas = Math.floor(minutos/60);
    var dias = Math.floor(horas/24);

    // averiguamos las horas restantes / dias
    horas = horas % 24;
    minutos = minutos % 60;
    segundos = segundos % 60;

    // agregamos ceros iniciales
    if (horas < 10) {
        horas = '0' + horas
    }

    if (minutos < 10) {
        minutos = '0' + minutos
    }

    if (segundos < 10) {
        segundos = '0' + segundos
    }

    // mostrar datos en las cajas
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;





}

// llamamos a nuestra funcion
cuentaRegresiva();

//actualizamos la llamda a la funcion
setInterval(cuentaRegresiva, 1000);