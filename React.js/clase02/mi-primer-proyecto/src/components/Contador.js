import './Contador.css'
import React from 'react';
//import React, { Component } from 'react';

/* ------------------------------------------------------------ */
/* componente basado en una clase (STATEFULL: SI guarda estado) */
/* ------------------------------------------------------------ */

/* class Contador extends Component { */
class Contador extends React.Component{

  // el constructor puede recibir props
  constructor(props){
    super(props)
    console.log(`Contador ${props.id} constructor`);

    // bindeo el incrementar al this de este propio objeto
    //this.incrementar = this.incrementar.bind(this)
    //this.decrementar = this.decrementar.bind(this)

    this.state = {
      contador : Number(props.valor)
    }
  }

  // ! EL RENDER SE DISPARA CUANDO CAMBIA EL ESTADO INTERNO DEL COMPONENTE O CUANDO CAMBIO UNA PROP EN UN COMPONENTE BASADO EN CLASE
  
  incrementar(){
    console.log(`Contador ${this.props.id} incrementar`);
    this.setState(prevstate => ({contador : prevstate.contador + 1}), () => {
      console.log(this.state.contador)
    }); 
  }

  decrementar(){
    console.log(`Contador ${this.props.id} decrementar`);
    this.setState(prevstate => ({contador : prevstate.contador - 1}), () => {
      console.log(this.state.contador)
    });
  }


  render(){
    /* let contador = 123; */
    // meto las propiedades con destructuring objects y asigno valor al let contador
    let { id, colorFondo } = this.props;
    //las props se reciben automaticamente, no es necesario poner (props) despues del componente

    // llamo del state al contador
    let contador = this.state.contador;

    return(
      <div className="Contador">
        <div className="jumbotron" style={{backgroundColor: colorFondo}}>
          <h3>Contador {id}</h3>
          <div className="alert alert-info w-100">Valor: {contador}</div>
          <button className="btn btn-success my-1" onClick={() => this.decrementar()}>
            -
          </button>
          <button className="btn btn-success my-1" onClick={() => this.incrementar()}>
            +
          </button>
          
        </div>
      </div>
    )
  }
}

export default Contador;