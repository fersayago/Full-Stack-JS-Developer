//EJERCICIO DE DIBUIJAR UNA FIGURA

class Figura {
  ancho;
  alto;
  constructor(w,h,canvas){
    this.ancho = w;
    this.alto = h;
    this.canvas = canvas;
  }
}

class Rectangulo extends Figura {
  constructor (w,h,canvas){
    super(w,h,canvas);
  }
  
  dibujar(){
    let ctxt = canvas.getContext("2d");
    //ctxt.beginPath();
    //ctxt.rect(0,0,this.ancho, this.alto);
    //ctxt.strokeStyle = "red";
    ctxt.fillStyle = "red";
    ctxt.fillRect(0,0, this.ancho, this.alto);
  }
}

let canvas = document.getElementById("myCanvas");
let rect = new Rectangulo(50, 50, canvas);
rect.dibujar();