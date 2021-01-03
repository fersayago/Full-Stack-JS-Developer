var data = {
  dia: "Lunes", // propiedad (clave : valor) separadas por coma
  clima: "nublado",
  temperatura: 18.6,
  actualizar: function(){ //metodo (porque su valor es una fn)
    console.log("actualizando...");
  }
};

// NOTACION DE PUNTO (Preferido)
// leer un valor
console.log( data.temperatura ); // 18.6
// modificar un valor
data.temperatura = 20.3;

// NOTACION DE CORCHETES
console.log( data["clima"]); // data.clima = "nublado"
data["clima"] = "soleado"


// caso real de uso de notación de corchetes
function buscar (propiedadAMostrar){
  console.log( data.propiedadAMostrar); // undefined
  console.log( data[propiedadAMostrar]); // si se invoca dia = "lunes"
}

//buscamos dia en data con la funcion
buscar("dia");