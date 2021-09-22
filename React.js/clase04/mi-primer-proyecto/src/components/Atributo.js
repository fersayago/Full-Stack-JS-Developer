import React from 'react';
import './Atributo.css'

class Atributo extends React.Component {
  constructor(props){
    super(props)

    console.log('Atributo -> constructor');
  }

  state = {

  }

  render() {
    //let {} =this.props
    //let {} = this.state

    return (
      <>
        <div className="Atributo">
          <div className="jumbotron">
            <h3>Componente Atributo</h3>
            <hr />
          </div>
        </div>
      </>
    )
  }
}

export default Atributo;