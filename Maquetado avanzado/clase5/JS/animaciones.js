const btnAnimar = document.getElementById('btn-animar');
const btnPausar = document.getElementById('btn-pausar');
const elementoAnimado = document.getElementById('elemento-animado')

document.querySelector('h2').innerHTML = 'WAITING ';

btnAnimar.onclick = animar;
btnPausar.onclick = pausar;

function animar () {
  console.log('animar')
  document.querySelector('h2').innerHTML = 'RUNNING';
  elementoAnimado.style.animationPlayState = 'running';
}

function pausar () {
  console.log('pausar')
  document.querySelector('h2').innerHTML = 'PAUSED';
  elementoAnimado.style.animationPlayState = 'paused';
}