import React from 'react'

import './Contador.css'

/* ---------------------------------------------------------- */
/* Componente basado en una clase (guarda estado -> stateful) */
/* ---------------------------------------------------------- */

class Contador extends React.Component{

  constructor(props){
    super(props)
    console.log(`Contador ${props.id} Constructor`)

    /* this.incrementar = this.incrementar.bind(this); */

    //SE PUEDE DECLARAR EL STATE DENTRO DEL CONSTRUCTOR
    //se debe agregar el "this." al principio
    /* this.state = {
      contador : Number(this.props.valor)
    } */

  }

  state = {
    contador : Number(this.props.valor)
  }

  incrementar(){
    console.log(`Contador ${this.props.id} Incrementar`)
    this.setState(prevstate => ({ contador : prevstate.contador + 1 }), () =>{
      console.log(this.state.contador)
    } )
    /* este console.log me va a traer el state anterior por lo que tengo que armar una funcion dentro del setstate para que una vez actualizado haga el console.log como se muestra arriba
    console.log(this.state.contador) */
  }
  

  render() {
    console.log('Contador render')

    //let contador = 123;
    let { id, fondo } = this.props
    let { contador} = this.state

    return (
      <div className="Contador">
        <div className="jumbotron" style={{backgroundColor:fondo}}>
          <h3>Contador #{id}</h3>
          <hr/>
          <h4 className="alert alert-info w-50">Valor: {contador}</h4>

          {/* <button className="btn btn-success my-1" onClick={this.incrementar}>Incrementar contador</button> */}

          {/* <button className="btn btn-success my-1" onClick={() => this.incrementar()}>Incrementar contador</button> */}

          {/* <button className="btn btn-success my-1" onClick={() => {
            // NO ES LA FORMA DE ACTUALIZAR UNA PROPIEDAD DEL ESTADO INTERNO
            // this.state.contador = this.state.contador +1 
            // this.forceUpdate()

            // MANERA NO TAN POLITICAMENTE CORRECTA:
            // tomamos la propiedad a modificar y le ponemos el valor de la propiedad y lo modificamos
            // No es politicamente correcta por que si tuviese varias fuentes asincronicas modificando
            // el contador podrian aparecer efectos no deseados sobre el valor a modificar.
            // this.setState({ contador : this.state.contador + 1 })

            // MANERA POLITICAMENTE CORRECTA:
            // usar un prevstate para sincronizar todas las fuentes asincronicas y no genera problema.
            // Se usa cuando quiera actualizar una propiedad en base al valor anterior de esa propiedad.
            this.setState(prevstate => ({ contador : prevstate.contador + 1 }))
            }}>
              Incrementar contador
          </button> */}
        
        <button className="btn btn-success my-1" onClick={() => this.incrementar()}>Incrementar contador</button>

        </div>
      </div>
    )
  }
}

export default Contador