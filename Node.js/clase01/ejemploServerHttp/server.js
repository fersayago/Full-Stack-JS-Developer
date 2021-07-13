const http = require("http");

let contadorVisitas = 0;

// req = informacion que recibo del frontend (header, metodo de comunicacion, url, etc)
// res = objeto de respuesta que le voy a enviar al frontend

const server = http.createServer((req, res) => {
  //console.log(req)
  let url = req.url;

  // filtramos para que no me sume el contador al hacer el request del favicon
  if (url === "/") {
    //cambiamos el tipo de content del head ya que asume que es texto plano
    res.writeHead(200, { "content-type": "text/html" }); // asume 'text/plain'

    res.write('<h2 style="color:purple">Hola soy un servidor HTTP</h2>');

    // res.end cierra la comunicacion y puede como no ir vacio
    res.end(`<h3 style="color:crimson">Visitas: ${++contadorVisitas}</h3>`);
  }
});

const PORT = 8080;
// escuchamos el servidor y declaramos puerto y accion ante error
server.listen(PORT, (err) => {
  if (err) return console.log(`Error en el servidor: ${err}`); //declaramos como manejar el error
  console.log(`Servidor HTTP escuchando en el puerto ${PORT}`); // log de que puerto estamos escuchando
});

/* DEMO: Genero otra instancia de servidor en una sola linea de codigo */
require("http")
  .createServer((req, res) =>
    res.end(`Server ${PORT + 1} - ${new Date().toLocaleString()}`)
  )
  .listen(PORT + 1);
