const http = require("http");

let contadorVisitas = 0;

// req = informacion que recibo del frontend (header, metodo de comunicacion, url, etc)
// res = objeto de respuesta que le voy a enviar al frontend

const server = http.createServer((req, res) => {
  //console.log(req)
  let url = req.url;
  // 2. AGREGAMOS EL TIPO DE METODO PARA ESPECIFICAR
  let method = req.method;
  
  console.log(url, method);

  if (method === "GET"){

    // ? RETOMAR 22:10

    
    // filtramos para que no me sume el contador al hacer el request del favicon
    if (url === "/") {
      //cambiamos el tipo de content del head ya que asume que es texto plano
      res.writeHead(200, { "content-type": "text/html" }); // asume 'text/plain'
      
      res.write('<h2 style="color:purple">Hola soy un servidor HTTP</h2>');
      
      res.write(`<h3 style="color:crimson">Visitas: ${++contadorVisitas}</h3>`);
      
      res.write(`<p style="color:purple">La FyH actual es: ${new Date().toLocaleString()}</p>`);
      
      res.end()
    }
    else if (url ==="/reset"){ // ! creamos una ruta para resetear el contador
      contadorVisitas = 0;
      res.end('Reset OK')
    }
    else { // 1. EN CASO DE QUE LA RUTA NO EXISTA
      res.writeHead(500, { "content-type": "text/html"});
      
      res.end(`<h2 style="color:red">ERROR 500. Ruta <span style="color:black;">${url}</span> no encontrado</h2>`);
      
    }
  }
  else { // 3. EN CASO DE QUE EL METODO NO SEA GET
    res.writeHead(500, {'content-type': 'text/html'})
    res.end(`<h2 style="color:red;">ERROR 500. Método <span style="color:black;">${method}</span> no implementado</h2>`)
  }
});

const PORT = process.env.PORT || 8080;
// escuchamos el servidor y declaramos puerto y accion ante error
server.listen(PORT, (err) => {
  if (err) return console.log(`Error en el servidor: ${err}`); //declaramos como manejar el error
  console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});
