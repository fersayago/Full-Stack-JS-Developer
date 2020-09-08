//obtener elemento y meterlo en una variable

var txt = document.getElementById('txt');

//trabajamos con el elemento

var numero = 1;

while ( numero <= 15) {
    txt.innerHTML = txt.innerHTML + numero + '<br>';
    numero++
}


// usando un array

var txt2 = document.getElementById('txt2');

var ingleses = [
    'Aston Martin',
    'Lotus',
    'Bentley',
    'McClaren',
    'Rolls Royce',
    'MG',
    'Jaguar',
    'Triumph',
    'Vauhall'
];

txt2.innerHTML = '';

var n = 0;
var cantidad = ingleses.length;

while (n < cantidad) {
    txt2.innerHTML = txt2.innerHTML + '<li>' + ingleses[n] + '</li>';
    n++
}