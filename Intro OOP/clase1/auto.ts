class Auto {
  marca: string;
  modelo: string;
  anio: number;
  chasis: number;
  encendido: boolean;
  color: string;
  velocidad: number

  //constructores

  constructor( marca: string, modelo: string, color: string, anio: number, chasis: number){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio; // ya que todos los autos que nacen ahora tienen ese modelo de año, luego se puede calcular con la fecha
    this.chasis = chasis; // logica que calcule el chasis
    this.velocidad = 0;

  }

  //metodos
  encender() : void {
    if (this.encendido === false) {
      this.encendido = true;
      console.log(`Se ha encendido ${this.marca} ${this.marca} se encendio`)
    }else {
      console.log(`Este ${this.marca} ${this.marca} ya estaba encendido`)
    }
  }

  apagar(): void {

  }

  acelerar(): void {

  }

  frenar(): void {

  }

  obtenerVelocidad(): number {
    return this.velocidad;
  }

  informar(): void {
    //armar linea por linea los console log de los atributos del auto
    console.log("Estado actual:")
    console.log(`Marca: ${this.marca}`)
    console.log(`Modelo:  ${this.modelo}`)
    console.log(`Año ${this.anio}`)
    console.log(`Encendido ${this.encendido}`)
    console.log(`Chasis: ${this.chasis}`)
  }
}

//main
//crear
let clio = new Auto("renault", "clio", "rojo", 2015, 987123);

// Ya que el duster carece de valores definidos para pasarlo por el constructor
// se rellena con undefined
let duster = new Auto("renault", "duster", undefined, undefined, undefined);

clio.anio = 2016;
clio.color = "rojo";
clio.chasis = 123456;
clio.velocidad = 0;


//ejecutar metodos
//no encendi el auto...
clio.acelerar();
clio.encender();
clio.encender();
clio.acelerar();

let velocidadActalClio = clio.obtenerVelocidad()
console.log(`${clio.modelo} ${clio.marca} velocidad actual: ${velocidadActalClio}`)

clio.informar();


duster.acelerar();
duster.informar();

//clio mio está apagado!