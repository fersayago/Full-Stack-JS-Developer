import React from 'react';
import { withRouter } from 'react-router';
import './Atributo.css'

class Atributo extends React.Component {
  constructor(props){
    super(props)

    console.log('Atributo -> constructor');
  }

  state = {
    estado1 : true,
    estado2 : true
  }

  cambiarEstilo(estado){
    return {
      backgroundColor: estado? 'green':'red',
      color: 'white',
      padding: '10px',
      borderRadius: '10px'
    }
  }

  cambiarClase(estado){
    return `btn btn-${estado? 'success':'danger'}`
  }

  render() {
    //let {} =this.props
    let { estado1, estado2 } = this.state

    return (
      <>
        <div className="Atributo">
          <div className="jumbotron">
            <h3>Componente Atributo</h3>
            <hr />

            <h4><u>Propiedades CSS Condicionales</u></h4>
            
            <button 
              className="btn btn-secondary mt-4 mb-1"
              onClick={() => this.setState(prevstate => ({estado1: !prevstate.estado1}))}
            >
              {estado1? 'Fondo 1 por estilo':'Fondo 2 por estilo'}
            </button>

            {/* HACEMOS LOS CAMBIOS MEDIANTE ESTILO */}
            <p style={this.cambiarEstilo(estado1)}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sequi natus vitae quis vel voluptatibus delectus quia fugit totam iure iusto quibusdam, hic reiciendis officiis illo deleniti voluptates? Quod, iusto.</p>

            <br />

            <h4><u>Clases CSS Condicionales</u></h4>

            <button 
              className="btn btn-secondary mt-4 mb-1"
              onClick={() => this.setState(prevstate => ({estado2: !prevstate.estado2}))}
            >
              {estado2? 'Fondo 1 por clase':'Fondo 2 por clase'}
            </button>

            {/* HACEMOS LOS CAMBIOS MEDIANTE CLASSNAME */}
            <p className={this.cambiarClase(estado2)}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sequi natus vitae quis vel voluptatibus delectus quia fugit totam iure iusto quibusdam, hic reiciendis officiis illo deleniti voluptates? Quod, iusto.</p>
          </div>
        </div>
      </>
    )
  }
}

export default Atributo;