import './Contador.css'
import React from 'react';
//import React, { Component } from 'react';

/* ------------------------------------------------------------ */
/* componente basado en una clase (STATEFULL: SI guarda estado) */
/* ------------------------------------------------------------ */

/* class Contador extends Component { */
class Contador extends React.Component{
  render(){
    let contador = 123;
    return(
      <div className="Contador">
        <div className="jumbotron">
          <h3>Contador</h3>
          <div className="alert alert-info">{contador}</div>
          <p>Retomar 1:33:00</p>
        </div>
      </div>
    )
  }
}

export default Contador;