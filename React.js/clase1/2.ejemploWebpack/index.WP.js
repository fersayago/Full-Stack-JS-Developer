//se utiliza paraa automatizacion de los procesos de desarrollo
//permite mergear varios archivos JS livianos para tener uno solo y trabajar
//mas comodamente
//la idea de webpack es la de reducir el tamaño de los archivos mediante
//el recorte de caracteres inncesarios como los espacios y saltos de renglon
//(minimizar) y ofuscacion (acortar los nombres de las funciones)


//vamos a mergear los dos archivos que tenemos, este e index.ES5.js

console.log('-------------- index.WP.js --------------')

function dobleDe(a) {
  return 2*a
}

var num = 32;
console.log('El cuádruple de ' + num + ' es ' + dobleDe(dobleDe(num)))

console.log('-----------------------------------------')