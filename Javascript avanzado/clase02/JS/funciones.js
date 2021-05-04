
// Definicion de función

function suma (a, b) { // paramentros entre () y le paso argumentos
  console.log(a,b, arguments); // arguments muestra todos los argumentos que sean pasados orignalemente en el llamado aunque la funcion no los utilice
  return a+b;
}

// Misma funcion pero con forEach

//llamada de función
console.log(suma());          // NaN // paso 0 parametros
console.log(suma(10));        // NaN // paso 1 parametro
console.log(suma(10,20));     // 30  // paso 2 parametros
console.log(suma(10,20,30));  // 30  // desestima el 3er parametro ya que no hay argumento

// Misma funcion pero para sumar todos los argumentos pasados
console.log("-----SumaArgs-----")
function sumaArgumentos(){
  let total = 0;
  for (var i = 0; i < arguments.length; i++){
    total = total + arguments[i];
  }
  return total;
}

console.log(sumaArgumentos(10,20,30,40,50,60,70));

//Misma funcion con forEach
console.log("-----sumaForEach-----")
function sumaForEach(){
  let total = 0;
  var argumentos = Array.from(arguments);
  console.log(argumentos, arguments);
  argumentos.forEach(function(valor){
    total += valor;
  })
  return total
}

console.log(sumaForEach(10,20,30,40,50,60,70,80));

//Agarrar valores sobrantes con el operador rest
console.log("-----operadorRest-----")

function sumaRest(a, b, ...r){
  console.log(a,b , r);
  return a+b
}

console.log(sumaRest(10,20,30,40,50,60,70,80));

// funcion forEach con resto
console.log("-----forEachRest-----")
function forEachRest(...resto){
  let total = 0;
  resto.forEach(function(valor){
    total += valor;
  })
  return total
}

console.log(forEachRest(10,20,30,40,50,60,70,80));