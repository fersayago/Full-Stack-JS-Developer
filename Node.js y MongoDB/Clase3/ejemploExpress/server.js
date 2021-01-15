const express = require('express');

const app = express();

let contadorVisitas = 0

/* esta funcion urlencoded decodifica la informacion mandanda por post */
/* y si esta en formato HTML viaja en formato urlencoded */
/* ext:true = se extiende la funcionalidad de un parseo de formulario HTML */
/* permite usar el body parser para enviar datos en un json */
app.use(express.urlencoded({extended: true}))

/* agregamos una capa para parsear datos entrantes en formato */
/* urlencoded o json */
app.use(express.json())

app.use(express.static('public'))

// CREAMOS NUESTRA PROPIA CAPA
app.use((req,res,next) => {
  console.log('*********************************')
  console.log('URL: ', req.url)
  console.log('METHOD: ', req.method)
  console.log('QUERY: ', req.query)
  console.log('BODY: ', req.body)
  // NO SE PUEDE VER EL PARAMS POR QUE SE CONSTRUYE EN BASE A LA RUTA
  console.log('*********************************')
  next()

})

app.use((req,res,next) =>{
  console.log('Timestamp', Date.now())
  next()
})

app.use((req,res,next) => {
  console.log('FyH', new Date().toLocaleString())
  console.log('************************************')
  console.log()
  next()
})

app.use((req,res,next) => {
  if (req.nethod == 'GET'){
    if (req.query.version == '1234') next()
    else res.send(`<h1 style="color:red;">Error de version (no se esta utilizando la 1234)</h1>`)
  }
})

const analizarVisitas = (req,res,next) => {
  if (req.query.codigo == 'abc') next()
    else res.send(`<h1 style="color:red;">Error de codigo</h1>`)
}

/* ------------------- */
/*      RUTAS GET      */ //Se utiliza para obtener información
/* ------------------- */

app.get('/', (req, res) => {
  res.send('Soy la ruta GET root')
})

app.get('/visitas', analizarVisitas, (req, res) => {
  res.send(`<i>Hola Express!</i> - Visitas: <b>${++contadorVisitas}</b>`)
})

app.get('/datos/:nombre/:apellido/:edad?', (req,res) => {
  let query = req.query
  console.log('query', query)

  let params = req.params
  console.log('params', params)

  res.json({query : params})
})


app.get('*', (req, res) => {
  let url = req.url
  let method = req.method

  res.send(`<b style="color: red;">Ruta ${method} - ${url} no implementada</b>`)
})

const PORT = 8080
app.listen(PORT, err => {
  if (err) throw new Error(`Servidor express en error: ${err}`)
  console.log(`Servidor express escuchando en puerto ${PORT}`)
})

/* -------------------- */
/*      RUTAS POST      */ //Se utiliza para postear información
/* -------------------- */
app.post('/', (req,res) => {
  let body = req.body
  console.log('body', body)
  res.send ('<h2>Ok POST</h2>')
})

app.post('/datos', (req,res) => {
  let body = req.body
  
  console.log(body)
  /* va a hacer que al enviar el request de login devuelva los datos en json */
  res.json(body)
})

app.post('*', (req,res) => {
  let url = req.url
  let method =  req.method
  res.send(`<b style="color:red;"> Ruta ${method}, ${url} no implementada</b>`)
})


/* ------------------- */
/*      RUTAS PUT      */ //Se utiliza para actualizar información
/* ------------------- */
app.put('/', (req,res) => {
  res.send ('<h2>Ok PUT</h2>')
})

app.put('/datos/:id', (req,res) => {

  let params = req.params
  console.log('params', params)
  
  
  let body = req.body
  console.log('body', body)
  res.json({params, body})
})

/* ---------------------- */
/*      RUTAS DELETE      */ //Se utiliza para borrar información
/* ---------------------- */
app.delete('/', (req,res) => {
  res.send ('<h2>Ok DELETE</h2>')
})

app.delete('/datos/:id', (req,res) => {

  let params = req.params
  console.log('params', params)
  
  
  let body = req.body
  console.log('body', body)
  res.json({params})
})