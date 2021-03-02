var canvas = null;
var lienzo = null;
var x = 0;
var y = 0;
const SIZE = 20;
var ultimaTecla = null;

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;

function start() {
  document.addEventListener("keydown", function (e) {
    ultimaTecla = e.keyCode;
    console.log(ultimaTecla);
  });

  canvas = document.getElementById("lienzo");
  lienzo = canvas.getContext("2d");
  run();
}

function run() {
  requestAnimationFrame(run);
  accionJuego();
  pintarLienzo();
}

function accionJuego() {
  if (ultimaTecla == KEY_RIGHT) {
    if (x < canvas.width - SIZE) x += SIZE;
  }

  if (ultimaTecla == KEY_LEFT) {
    if (x >= SIZE) x -= SIZE;
  }

  if (ultimaTecla == KEY_DOWN) {
    if (y < canvas.height - SIZE) y += SIZE;
  }

  if (ultimaTecla == KEY_UP) {
    if (y >= SIZE) y -= SIZE;
  }

  ultimaTecla = null;
}

function pintarLienzo() {
  /* Pinto el fondo del lienzo */
  lienzo.fillStyle = "#000080";
  lienzo.fillRect(0, 0, canvas.width, canvas.height);

  /* Represento un cuadrado en x,y */
  lienzo.fillStyle = "#000";
  lienzo.fillRect(x, y, SIZE, SIZE);

  /* represento un texto con las coordenadas x,y */
  lienzo.fillStyle = "#fff";
  lienzo.font = "20px Arial";
  lienzo.fillText(`x: ${x} | y: ${y}`, 5, 20);
}

window.addEventListener("load", start);


sum(10,20);
diff(10,20);
function sum (x,y){
  return x + y;
}

let diff = function (x,y){
  return x - y;
}