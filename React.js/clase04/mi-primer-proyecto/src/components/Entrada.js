import React from 'react';
import './Entrada.css'

class Entrada extends React.Component {
  constructor(props){
    super(props)

    console.log('Entrada -> constructor');
  }

  state = {
    mensaje: 'Soy un mensaje. Lorem Ipsum!!!',
    valor1 : 123,
    contador: 456,
    valor2: 789
  }

  /* LIFE CYCLE HOOKS */

  /* el componente tiene su vista lista (HTML esta cargado) */
  componentDidMount(){
    console.log('Entrada -> componentDidMount');

    this.timerGenerado = setInterval(() => {
      this.setState(prevstate => ({valor1: prevstate.valor1 + 1}))
    }, 1000)
  }

  /* cambio algo en la vista de componente*/
  componentDidUpdate(){
    console.log('Entrada -> componentDidUpdate');
  }

  /* el componente sera eliminado de la vista */
  componentWillUnmount(){
    console.log('Entrada -> componentWillUnmount');
    clearInterval(this.timerGenerado)
  }

  actualizar(e){
    let valor = e.target.value
    console.log('actualizar ', valor)
    this.setState({valor2: valor})
  }

  render() {
    let { titulo } =this.props
    let { mensaje, valor1, contador, valor2 } = this.state

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

            <h4>
              <u>Event Binding</u>
            </h4>
            <button 
              className="btn btn-success my-3 back"
              onClick={ () => this.setState(prevstate => ({contador: prevstate.contador + 1}))}
            >
              Contar { contador }
            </button>

            <h4>
              <u>Table Data Binding (Manual)</u>
            </h4>
            <input type="text" value={valor2} onChange={
              e => this.actualizar(e)
            }/> {valor2}
            
          </div>
        </div>
      </>
    )
  }
}

export default Entrada;