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
    // DESTRUCTURADO
    let { contador } = this.state
    let { id } = this.props 
    console.log(`Contador ${id} incrementar: ${contador}`);
    this.setState(prevstate => ({contador : prevstate.contador + 1}), () => {
      //console.log(this.state.contador)
      //envio objeto con contador y Id al padre
      this.props.enviarContadorAlPadre({
        contador: contador,
        id: id
        })
    }); 
  }

  decrementar(){
    // NO DESTRUCTURADO

    console.log(`Contador ${this.props.id} decrementar: ${this.state.contador} >`);
    this.setState(prevstate => ({contador : prevstate.contador - 1}), () => {
      //console.log(this.state.contador)
      this.props.enviarContadorAlPadre({
        contador: this.state.contador,
        id: this.props.id
        })
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
            Dismimuir
          </button>
          <button className="btn btn-success my-1" onClick={() => this.incrementar()}>
            Incrementar
          </button>
          
        </div>
      </div>
    )
  }
}

export default Contador;