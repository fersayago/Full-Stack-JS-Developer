import React from 'react';
import './Estructura.css'

class Estructura extends React.Component {
  constructor(props){
    super(props)

    console.log('Estructura -> constructor');
  }

  state = {

  }

  render() {
    //let {} =this.props
    //let {} = this.state

    return (
      <>
        <div className="Estructura">
          <div className="jumbotron">
            <h3>Componente Estructura</h3>
            <hr />
          </div>
        </div>
      </>
    )
  }
}

export default Estructura;