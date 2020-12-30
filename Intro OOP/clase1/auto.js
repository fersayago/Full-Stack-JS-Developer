var Auto = /** @class */ (function () {
    function Auto() {
    }
    //constructores
    //metodos
    Auto.prototype.encender = function () {
        if (this.encendido === false) {
            this.encendido = true;
            console.log("Se ha encendido " + this.marca + " " + this.marca + " se encendio");
        }
        else {
            console.log("Este " + this.marca + " " + this.marca + " ya estaba encendido");
        }
    };
    Auto.prototype.apagar = function () {
    };
    Auto.prototype.acelerar = function () {
    };
    Auto.prototype.frenar = function () {
    };
    Auto.prototype.obtenerVelocidad = function () {
        return this.velocidad;
    };
    Auto.prototype.informar = function () {
        //armar linea por linea los console log de los atributos del auto
        console.log("Estado actual:");
        console.log("Marca: " + this.marca);
        console.log("Modelo:  " + this.modelo);
        console.log("A\u00F1o " + this.anio);
        console.log("Encendido " + this.encendido);
        console.log("Chasis: " + this.chasis);
    };
    return Auto;
}());
//main
//crear
var clio = new Auto();
var duster = new Auto();
clio.anio = 2016;
clio.encendido = false;
clio.chasis = 123456;
clio.velocidad = 0;
clio.modelo = "clio mio";
clio.marca = "renault";
clio.color = "rojo";
duster.modelo = "duster";
duster.marca = "renault";
//ejecutar metodos
//no encendi el auto...
clio.acelerar();
clio.encender();
clio.encender();
clio.acelerar();
var velocidadActalClio = clio.obtenerVelocidad();
console.log(clio.modelo + " " + clio.marca + " velocidad actual: " + velocidadActalClio);
clio.informar();
duster.acelerar();
duster.informar();
//clio mio está apagado!
