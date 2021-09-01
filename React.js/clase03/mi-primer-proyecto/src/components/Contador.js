import './Contador.css'
import React from 'react';

class Contador extends React.Component{

  constructor(props){
    super(props)
    console.log(`Contador ${props.id} constructor`);


    this.state = {
      contador : Number(props.valor)
    }
  }
  
  incrementar(){
    console.log(`Contador ${this.props.id} incrementar`);
    this.setState(prevstate => ({contador : prevstate.contador + 1}), () => {
      console.log(this.state.contador)
      //envio contador al padre
      this.props.enviarContadorAlPadre(this.state.contador)
    }); 
  }

  decrementar(){
    console.log(`Contador ${this.props.id} decrementar`);
    this.setState(prevstate => ({contador : prevstate.contador - 1}), () => {
      console.log(this.state.contador)
      this.props.enviarContadorAlPadre(this.state.contador)
    });
  }


  render(){
    let { id, colorFondo } = this.props;

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