var dado = document.getElementById('dado');

function rollDice() {
    
    // obtenemos un numero aleatorio
    var numeroAleatorio = Math.random(1,6);
    console.log(numeroAleatorio);

    var numeroMultiplicado = (numeroAleatorio * 5) + 1;
    console.log(numeroMultiplicado);

    var numeroRedondeado = Math.round(numeroMultiplicado);
    console.log(numeroRedondeado);

    //floor:redondea para abajo
    //seal: redondea para arriba
    
    // mostrar la imagen dentro del figure
    if (numeroRedondeado == 1) {
        dado.innerHTML = '<img src="img/dados/dado1.png">';
    }
    else if (numeroRedondeado == 2) {
        dado.innerHTML = '<img src="img/dados/dado2.png">';
    }
    else if (numeroRedondeado == 3) {
        dado.innerHTML = '<img src="img/dados/dado3.png">';
    }
    else if (numeroRedondeado == 4) {
        dado.innerHTML = '<img src="img/dados/dado4.png">';
    }
    else if (numeroRedondeado == 5) {
        dado.innerHTML = '<img src="img/dados/dado5.png">';
    }
    else if (numeroRedondeado == 6) {
        dado.innerHTML = '<img src="img/dados/dado6.png">';
    }

    /*   manera de hacerlo con dos lineas nada mas
    dado.innerHTML = '<img src="img/dados/dado'+ numeroRedondeado +'.png">'
    */

}


//llamamos a la funcion
rollDice();