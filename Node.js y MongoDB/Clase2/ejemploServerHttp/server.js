const http = require('http')

//cada vez que yo visite mi sitio pongo el contador y agrego
let contadorVisitas = 0;

const server = http.createServer((req, res) => {
  //console.log(req)
  let url = req.url
  let method = req.method
  console.log(url, method)

  if (method == 'GET'){
    //El pedido al favicon.ico hace que los pedidos aumenten de a 2 ya que cuenta como request
    //para saber cuantos request va a hacer, se puede hacer un console.log(req)
    //quitar pedido de favicon.ico
    if (url == '/'){    
      res.writeHead(200,{'content-type': 'text/html' })
      res.write('<h1 style="color:blue;">Hola soy un servidor Http</h1>')
      res.write(`<h3> Visitas: ${++contadorVisitas}</h3>`)
      res.write(`<p style="color:purple;">La fecha y hora actual es: ${new Date().toLocaleString()}</p>`)
      //Finaliza comunicacion con el servidor, puede estar vacio o poblado
      res.end()
    }else if (url == '/reset'){
      //resetear contador de visitas mediante la url /reset
      contadorVisitas = 0;
      res.end('Reset ok')
    }else {
      res.writeHead(500, {'content-type': 'text/html'})
      res.end(`<h2 style="color:red;">ERROR 404. Recurso <span style="color:orange;">${url}</span> no encontrado </h2>`)
    }
  }
})
  
  const PORT = process.env.PORT || 8080
  server.listen(PORT, err => {
    if (err) return console.log(`Error en el servidor: ${err}`)
    console.log(`Servidor Http escuchando en el puerto ${PORT}`)
  })
  
  //Generar servidor http en una linea de codigo:
  //require('http').createServer((req,res) => res.end(`Server ${PORT+1} - ${new Date().toLocaleString()}`)).listen(PORT+1)