import './Mensaje.css'

/* -------------------------------------------------------------- */
/* componente basado en una funcion (STATELESS: NO guarda estado) */
/* -------------------------------------------------------------- */

function Mensaje(props) {
  // creo una variable para llamarlo como una rexpresion en react
  /* let titulo = "Componente"; */

  // Se puede crear una variable para asignarle la prop que reciba de su invocación
  /* let titulo = props.titulo */
  // o se puede  invocar la propiedad directamente desde props.prop

  // DESTRUCTURING OBJECT:
  // Se puede asignar a variables los valores pasados por propiedades
  //let { titulo, colorFondo } = props;

  // TOMAR LAS PROPIEDADES DE LA RUTA
  let { titulo, colorFondo } = props.match.params;

  return (
    <div className="Mensaje">
      <div className="jumbotron" style={{backgroundColor: colorFondo}}>
        {/* En el div anterior primero se usan llaves para marcar el uso de javascript y luego se usan otras llaves para marcar el uso de objeto */}
        <h3>{titulo}</h3>
        {new Date().toLocaleString()}
        <hr />
        <p>Un componente es definido por una funcion que se exporta, siendo este Mensaje.js un componente que se toma desde App.js</p>
        <p>Un archivo puede exportar un solo componente a menos que se use export con llaves y los elementos a exportar en vez de usar export default</p>
      </div>
    </div>
    )
}

/* export default Mensaje; */
// Para exportar mas de un mensaje:
export {
  Mensaje,
  //Mensaje2
}