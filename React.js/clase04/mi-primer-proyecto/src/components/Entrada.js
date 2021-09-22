import React from 'react';
import './Entrada.css'

class Entrada extends React.Component {
  constructor(props){
    super(props)

    console.log('Entrada -> constructor');
  }

  state = {
    mensaje: 'Soy un mensaje. Lorem Ipsum!!!',
    valor1 : 123
  }

  render() {
    let { titulo } =this.props
    let { mensaje, valor1 } = this.state

    return (
      <>
        <div className="Entrada">
          <div className="jumbotron">
            <h3>Componente {titulo}</h3>
            <hr />

            <h4><u>Expresión</u></h4>
            <p>{mensaje}</p>

            <h4>
              <u>Property Binding</u>
            </h4>
            {/* Manera de relacionar una entidad con un input */}
            <input type="text" value="123" readOnly /> <br />
            <input type="text" value={"123"} readOnly /> <br />
            <input type="text" value={valor1} readOnly /> <br />
            
          </div>
        </div>
      </>
    )
  }
}

export default Entrada;