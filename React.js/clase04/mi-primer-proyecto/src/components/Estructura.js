import React from 'react';
import './Estructura.css'

class Estructura extends React.Component {
  constructor(props){
    super(props)

    console.log('Estructura -> constructor');
  }

  state = {
    mostrar: true,
    personas : [
      'Pedro',
      'Juan',
      'Fer',
      'Diego',
      'Lucia'
    ],
    alumnos : [
      { nombre: 'Pedro', apellido: 'Gomez', edad: 23, curso: true, foto: 'https://cdn-icons-png.flaticon.com/512/4786/4786257.png' },
      { nombre: 'Juan', apellido: 'Picos', edad: 42, curso: false, foto: 'https://cdn-icons-png.flaticon.com/512/4786/4786250.png' },
      { nombre: 'Fer', apellido: 'Sayago', edad: 28, curso: true, foto: 'https://cdn-icons-png.flaticon.com/512/4786/4786283.png' }, 
      { nombre: 'Diego', apellido: 'Hernandez', edad: 35, curso: true, foto: 'https://cdn-icons-png.flaticon.com/512/4786/4786278.png' }, 
      { nombre: 'Lucia', apellido: 'Martin', edad: 40, curso: true, foto: 'https://cdn-icons-png.flaticon.com/512/4786/4786309.png' }, 
    ]
  }

  cambiar(){
    this.setState(prevstate => ({ mostrar : !prevstate.mostrar}))
  }

  render() {
    //let {} =this.props
    let { mostrar, personas, alumnos } = this.state

    return (
      <>
        <div className="Estructura">
          <div className="jumbotron">
            <h2>Componente Estructura</h2>

            <h4><u>Rendering Condicional</u></h4>

            <button 
              className="btn btn-primary my-2"
              onClick={ () => {this.cambiar()}}
            >
              Toggle
            </button>

            { mostrar &&
            <p className="alert alert-info">
            sLorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis animi quis dolorum reprehenderit inventore repellendus quasi molestiae reiciendis vitae amet beatae dolore dolor molestias, non sint rerum. Impedit, fugit et.
            </p>
            }
            <hr />
            <h4><u>Loop Rendering</u></h4>

            <h5>Array de strings en una lista</h5>

            <ul>
              {
                personas.map( (persona, indice) => <li key={indice}>{persona}</li>)
              }
            </ul>

            <h5>Array de objetos en una lista</h5>

            <li>
              {
                alumnos.map(
                  (alumno,indice) =>
                  <li key={indice}>
                    {alumno.nombre} {alumno.apellido}
                  </li>
                )
              }
            </li>

            <h5>Array de objetos en una tabla</h5>

            <table className="table">
              <thead>
              <tr className="bg-succes text-white">
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Curso</th>
                <th>Foto</th>
              </tr>
              </thead>
              <tbody>
                {
                  /* MUESTRO TODOS LOS ALUMNOS QUE HICIERON EL CURSO */
                  /* alumnos.filter( alumno => alumno.curso).map( (alumno, indice) => */

                  /* MUESTRO TODOS LOS ALUMNOS */
                  alumnos.map( (alumno, indice) =>
                    <tr key={indice} className="bg-info text-white">
                      <td>{alumno.nombre}</td>
                      <td>{alumno.apellido}</td>
                      <td>{alumno.edad}</td>
                      <td>{alumno.curso? "SI" : "NO"}</td>
                      <td>
                        <img src={alumno.foto} width="50" alt={alumno.nombre+alumno.apellido} />
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>

          </div>
        </div>
      </>
    )
  }
}

export default Estructura;