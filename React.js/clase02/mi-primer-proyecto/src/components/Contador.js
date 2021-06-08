import './Contador.css'
import React from 'react';
//import React, { Component } from 'react';

/* ------------------------------------------------------------ */
/* componente basado en una clase (STATEFULL: SI guarda estado) */
/* ------------------------------------------------------------ */

/* class Contador extends Component { */
class Contador extends React.Component{
  
  render(){
    console.log('Contador render')
    /* let contador = 123; */
    // meto las propiedades con destructuring objects y asigno valor al let contador
    let { valor: contador, colorFondo } = this.props;
    //las props se reciben automaticamente, no es necesario poner (props) despues del componente

    return(
      <div className="Contador">
        <div className="jumbotron" style={{backgroundColor: colorFondo}}>
          <h3>Contador</h3>
          <div className="alert alert-info w-50">Valor: {contador}</div>
          <p>Retomar 1:40:00</p>
        </div>
      </div>
    )
  }
}

export default Contador;