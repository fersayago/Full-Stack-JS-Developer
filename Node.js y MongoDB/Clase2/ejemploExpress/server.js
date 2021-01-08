const express = require('express')

const app = express()

let contadorVisitas = 0


// Mediante este comando podemos setear la carpeta public como
// la ruta por defecto para evitar usar "__dirname"
// la ventaja de esto es que los archivos de ese lugar van a ser
// leidos desde la cache del servidor, archivos que no cambian (estaticos)
app.use(express.static('public'))

/* ------------------- */
/*      RUTAS GET      */ //Se utiliza para obtener información
/* ------------------- */

app.get('/', (req, res) => {
  //Para poder tener acceso a la ruta absoluta donde se instalo
  //node se puede usar el atajo "__dirname"
  // console.log(__dirname)
  // res.sendFile(__dirname + '/public/index.html')
})

app.get('/visitas', (req, res) => {
  res.send(`<i>Hola Express!</i> - Visitas: <b>${++contadorVisitas}</b>`)
})


app.get('*', (req, res) => {
  let url = req.url
  let method = req.method

  res.send(`<b style="color: red;">Ruta ${method} - ${url} no implementada</b>`)
})

const PORT = 8080
// 1- declaramos constante para setear el puerto dinamico
// const server = app.listen(PORT, err => {
app.listen(PORT, err => {
  if (err) throw new Error(`Servidor express en error: ${err}`)
  // 2- asignamos puerto mediante el servidor
  // console.log(`Servidor express escuchando en puerto ${server.address().port}`)
  console.log(`Servidor express escuchando en puerto ${PORT}`)
})

/* -------------------- */
/*      RUTAS POST      */ //Se utiliza para postear información
/* -------------------- */
app.post('/', (req,res) => {
  res.send ('<h2>Ok POST</h2>')
})

app.post('/datos', (req,res) => {
  res.send ('<h2>Ok POST DATOS</h2>')
})


/* ------------------- */
/*      RUTAS PUT      */ //Se utiliza para actualizar información
/* ------------------- */
app.put('/', (req,res) => {
  res.send ('<h2>Ok PUT</h2>')
})

/* ---------------------- */
/*      RUTAS DELETE      */ //Se utiliza para borrar información
/* ---------------------- */
app.delete('/', (req,res) => {
  res.send ('<h2>Ok DELETE</h2>')
})