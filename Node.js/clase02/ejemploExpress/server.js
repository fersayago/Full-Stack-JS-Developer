const express = require('express');

// este objeto representa un servidor que tiene metodos
const app = express()

let contadorVisitas = 0;

/* -------------------------------------- */
/* ------------ RUTAS GET --------------- */
/* -------------------------------------- */


app.get('/', (req, res) => {
  res.send(`<h1>Hola Express!</h1> - Visitas <b>${++contadorVisitas}</b>`)
})

app.get('/page', (req, res) =>{
  let pathIndex = '/public/index.html';
  res.sendFile(__dirname + pathIndex);
})

app.get('*', (req, res) => {
  let url = req.url;
  let method = req.method;
  res.send(`<b style="color:red;">Ruta ${method} de pagina ${url} no implementada</b>`)
})

// console.log(__dirname);

/* -------------------------------------- */
/* ------------ RUTAS POST -------------- */
/* -------------------------------------- */

app.post('/', (req, res) =>{
  res.send('<h2>Ok POST</h2>')
})

/* ------------------------------------- */
/* ------------ RUTAS PUT -------------- */
/* ------------------------------------- */

app.put('/', (req, res) =>{
  res.send('<h2>Ok PUT</h2>')
})

/* -------------------------------------- */
/* ----------- RUTAS DELETE ------------- */
/* -------------------------------------- */

app.delete('/', (req, res) =>{
  res.send('<h2>Ok DELETE</h2>')
})

// ! RETOMAR 2:23:00

const PORT = 7070;

// en un objeto server almacenamos el metodo adress que nos va a dar el puerto que asigno el SO para que el servidor funcione si no se le asigna puerto
const server = app.listen(PORT, err => {
  if (err) throw new Error(`error en servidor express ${err}`)
  console.log(`Servidor express escuchando en el puerto ${server.address().port}`); // leemos el puerto de escucha (en este caso PORT, y si no estuviese asignado, el que asigna el sistema operativo)
});

