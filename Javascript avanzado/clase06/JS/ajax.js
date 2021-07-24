const contenido = document.getElementById("contenido");
const nav = document.querySelector("nav");

// refresh o carga inicial
window.addEventListener("load", reconstruirPagina);

// me permite guardar los estados que se almacenan cuando se vuelve a otras paginas anteriores o se retorna
// <- (back) -> (forward)
window.addEventListener("popstate", reconstruirPagina);

nav.addEventListener("click", (e) => {
  // para evitar que se ejecute de hacer click en el nav
  if (e.target.tagName == "NAV") {
    return;
  }

  e.preventDefault();

  // e.target.href != e.target.getAttribute("href")
  // http://127.0.0.1:5500/home != /home
  let miRuta = e.target.getAttribute("href");

  // ["new-tab", "index"]
  history.pushState(routes.miRuta, null, miRuta); // window = objeto que representa al navegador

  /*
   * PUSH STATE:
   * tiene 3 parametros:
   * el primer parametro sirve para mandar un objeto de estado de la pagina
   * el segundo parametro cambia el titulo pero no funciona y no es soportado por ningun navegador por lo que normalmente se deja en null
   * el ultimo espera un string que se agrega a la navegación
   */

  // console.log(miRuta)
  cargarContenido(miRuta);
});

function cargarContenido(ruta) {
  // Dejamos un placeholder de "Cargando..." cuando se actualice la ruta
  contenido.innerHTML = "Cargando...";

  // si no se encuentra la ruta en el router
  if (ruta in routes == false) {
    ruta = "error404";
  }


  // agregamos el condicional para que cargue del cache si se elije la mis opción
  if ("cache" in routes[ruta] && routes[ruta].cache) {
    contenido.innerHTML = routes[ruta].cache;
    document.title = routes[ruta].titulo;
    
    //return para que finalice la funcion y no llegue a ejecutarse el ajax
    return
    // ! RETOMAR 1:15:30
  }
  // AJAX: Async Javascript and XML
  const ajax = new XMLHttpRequest(); // genera un objeto ajax

  // informamos que la peticion que queremos hacer es por el metodo get y el recurso al cual queremos acceer
  ajax.open("get", routes[ruta].url);
  ajax.send(); //enviar el request
  ajax.addEventListener("load", (e) => {
    contenido.innerHTML = ajax.response;

    //agregamos cache para guardar toda la pagina ahi dentro
    routes[ruta].cache = ajax.response;

    //para cambiar el titulo con SPA
    document.title = routes[ruta].titulo; // es lo mismo que usar document.querySelector("title").textContent
  });

  // esto es codigo asincrono ya que la unica manera de manejar la respuesta del ajax es mediante un evento que le avisa que la información ya llego
}

function reconstruirPagina(e) {
  //esto se dispara cada vez que me llega la respuesta del servidor independientemente de la direccion
  // console.log(e.state);
  let miRuta = location.pathname;
  cargarContenido(miRuta);
}
