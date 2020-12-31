function hacerLlamadaAsincrona(){
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        console.log("===============")
        console.log(this.readyState);
        console.log(this.status);
        console.log(this.responseText);
        
        if ((this.readyState == 4) && (this.status ==200)){
            let res = document.getElementById("resultadoLlamada")
            res.innerHTML = this.responseText
        }
    }

    xhttp.open("GET", "consumir.html")
    xhttp.send();
}

function recuperarDatos(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function (){
        //el this y el xhr es lo mismo
        //la funcion load pertenece al objeto xhr
        //puedo referirme al objeto tambien con el this
        // USAR EL THIS
        if ((xhr.readyState == 4) && (this.status == 200)) {
            //convertir un string en formato json
            //en un objeto javascript
            let res = JSON.parse(xhr.responseText);
            document.getElementById("nombre").innerHTML = res.nombre;
            document.getElementById("apellido").innerHTML = res.apellido;
            document.getElementById("profesion").innerHTML = res.profesion;
        }
    }
    xhr.open("GET", "clase4.json");
    xhr.send();
}