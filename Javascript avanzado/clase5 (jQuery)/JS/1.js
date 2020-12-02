$(document).ready(function(){
    console.log("el onload al estilo jQuery")
})

function cambiardiv(){
    var elem = document.getElementById("divResultado")
    elem.innerHTML = ("Modificado por DOM | " + new Date());
}

function cambiardivjQuery(){
    $("#divResultado").html(`Modificado por jQuery | ${new Date()}`);
}