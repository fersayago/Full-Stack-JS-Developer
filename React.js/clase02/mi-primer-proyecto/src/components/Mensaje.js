import './Mensaje.css'

function Mensaje() {
  return (
    <div className="Mensaje">
      <div className="jumbotron">
        <h3>Componente</h3>
        <hr />
        <p>Un componente es definido por una funcion que se exporta, siendo este Mensaje.js un componente que se toma desde App.js</p>
        <p>Un archivo puede exportar un solo componente a menos que se use export con llaves y los elementos a exportar en vez de usar export default</p>
        <p>Retomar 48:00:00 clase 02</p>
      </div>
    </div>
    )
}

/* export default Mensaje; */
export {
  Mensaje,
  //Mensaje2
}