const http = require('http')

//cada vez que yo visite mi sitio pongo el contador y agrego
let contadorVisitas = 0;

const server = http.createServer((req, res) => {
  //console.log(req)
  let url = req.url
  console.log(url)

  //quitar pedido de favicon.ico
  if (url == '/'){    
    res.writeHead(200,{'content-type': 'text/html' })
    res.write('<h1 style="color:blue;">Hola soy un servidor Http</h1>')
    //Finaliza comunicacion con el servidor, puede estar vacio o poblado
    res.end(`<h3 style="color:crimson;">visitas ${++contadorVisitas}</h3>`)
    //El pedido al favicon.ico hace que los pedidos aumenten de a 2 ya que cuenta como request
    //para saber cuantos request va a hacer, se puede hacer un console.log(req)
  }
})

const PORT = 8080
server.listen(PORT, err => {
  if (err) return console.log(`Error en el servidor: ${err}`)
  console.log(`Servidor Http escuchando en el puerto ${PORT}`)
})

//Generar servidor http en una linea de codigo
//require('http').createServer((req,res) => res.end(`Server ${PORT+1} - ${new Date().toLocaleString()}`)).listen(PORT+1)