import './Mensaje.css'

/* -------------------------------------------------------------- */
/* componente basado en una funcion (STATELESS: NO guarda estado) */
/* -------------------------------------------------------------- */

function Mensaje(props) {
  // destructuring por ruta
  let { titulo, colorFondo } = props.match.params;

  return (
    <div className="Mensaje">
      <div className="jumbotron" style={{backgroundColor: colorFondo}}>
        <h3>{titulo}</h3>
        {new Date().toLocaleString()}
        <hr />
        <p>Un componente es definido por una funcion que se exporta, siendo este Mensaje.js un componente que se toma desde App.js</p>
        <p>Un archivo puede exportar un solo componente a menos que se use export con llaves y los elementos a exportar en vez de usar export default</p>
      </div>
    </div>
    )
}


export {
  Mensaje,
}