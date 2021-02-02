import './Mensaje.css'

function Mensaje(props) {
  /* let msj = 'Mensaje Nro 1'
  let msj = props.msj
  let fondo = props.fondo
  let fondo = props.fondo */
  
  //DESTRUCTURING OBJECT
  let { msj, fondo } = props

  return (
    <div className="Mensaje">
      {/* APLICACION DE ESTILOS DINAMICOS */}
      <div className="jumbotron" style={{backgroundColor: fondo}}>
      <h3>{msj}</h3>
      {/* {4 + 3} */}
      {new Date().toLocaleString()}
      <hr/>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt facilis cumque inventore saepe illo iure eveniet voluptatibus repudiandae ea. Commodi, id? Blanditiis quos animi saepe illum vel quam accusantium.</p>
      </div>
    </div>
  )
}

export default Mensaje