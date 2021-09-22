import React from 'react';
import './Formulario.css'

class Formulario extends React.Component {
  constructor(props){
    super(props)

    console.log('Formulario -> constructor');
  }

  state = {

  }

  render() {
    //let {} =this.props
    //let {} = this.state

    return (
      <>
        <div className="Formulario">
          <div className="jumbotron">
            <h3>Componente Formulario</h3>
            <hr />
          </div>
        </div>
      </>
    )
  }
}

export default Formulario;