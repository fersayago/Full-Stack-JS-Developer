//ubicamos elemento/s dentro del DOM

var txtFecha = document.getElementById('txtFecha');

//generamos funcion/es de control

function mostrarFecha() {

    //crear un objeto de Fecha
    var fecha = new Date();

    //obtenemos el dia del mes, el mes y el año
    var diaDelMes = fecha.getDate();
    if (diaDelMes < 10) {
        diaDelMes = '0' + diaDelMes;
    }

    var mes = fecha.getMonth() + 1; //los meses empiezan a contar de 0
    if (mes < 10) {
        mes = '0' + mes;
    }

    var anio = fecha.getFullYear();

    /*
    fecha.getDay trae el numero de dia de la semana, siendo:
    dom = 0;
    lun = 1;
    mar = 2;
    etc.
    */


    //mostramos la fecha en el span
    txtFecha.innerText = diaDelMes + '/' + mes + '/' + anio;
}

//llamar a la funcion

mostrarFecha();