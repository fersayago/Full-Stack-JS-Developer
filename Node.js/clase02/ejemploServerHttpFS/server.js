const http = require("http");
const fs = require('fs');

let contadorVisitas = 0;


const server = http.createServer((req, res) => {
  let url = req.url;
  let method = req.method;
  
  console.log(url, method);

  if (method === "GET"){

    
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" }); // asume 'text/plain'
      
      res.write('<h2 style="color:purple">Hola soy un servidor HTTP</h2>');
      
      res.write(`<h3 style="color:crimson">Visitas: ${++contadorVisitas}</h3>`);
      
      res.write(`<p style="color:purple">La FyH actual es: ${new Date().toLocaleString()}</p>`);
      
      res.end()
    }
    else if (url ==='/page'){
      let pathindex = './public/index.html';

      /* ------------------------------------------ */
      /*    Lectura Sincrónica (BLOQUEANTE) NO!!    */
      /* ------------------------------------------ */

      /* try {
        // no se necesita aclarar utf-8 ya que se  puede trabajar con buffer array
        let page = fs.readFileSync(pathindex)
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(page);
      } catch (error) {
        res.writeHead(404, {'content-type': 'text/html'})
        res.end(`<h2 style="color:red;">ERROR 404. Recurso <span style="color:black;">${pathindex}</span> no encontrado</h2>`)
      } */

      /* ------------------------------------------ */
      /*            Lectura Asincrónica             */
      /* ------------------------------------------ */

      fs.readFile(pathindex, (error, page) => {
        if (error){
          res.writeHead(404, {'content-type': 'text/html'});
          res.end(`<h2 style="color:red;">ERROR 404. Recurso <span style="color:black;">${pathindex}</span> no encontrado</h2>`)
        }
        else {
          res.writeHead(200, {'content-type': 'text/html'});
          res.end(page);
        }
      })
    }
    else if (url ==="/reset"){
      contadorVisitas = 0;
      res.end('Reset OK')
    }
    else { 
      res.writeHead(500, { "content-type": "text/html"});
      
      res.end(`<h2 style="color:red">ERROR 500. Ruta <span style="color:black;">${url}</span> no encontrado</h2>`);
      
    }
  }
  else {
    res.writeHead(500, {'content-type': 'text/html'})
    res.end(`<h2 style="color:red;">ERROR 500. Método <span style="color:black;">${method}</span> no implementado</h2>`)
  }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, (err) => {
  if (err) return console.log(`Error en el servidor: ${err}`); //declaramos como manejar el error
  console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});
