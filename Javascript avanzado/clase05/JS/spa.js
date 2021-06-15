const contenido = document.getElementById("contenido");
const nav = document.querySelector("nav");

// me permite guardar los estados que se almacenan cuando se vuelve a otras paginas anteriores o se retorna
// <- (back) -> (forward)
window.addEventListener("popstate", e => {
  console.log(e);
  let miRuta = location.pathname;
  cargarCogintenido(miRuta);
});

nav.addEventListener("click", e => {
  // para evitar que se ejecute de hacer click en el nav
  if (e.target.tagName == "NAV") {
    return;
  }

  e.preventDefault();


  // e.target.href != e.target.getAttribute("href")
  // http://127.0.0.1:5500/home != /home
  let miRuta = e.target.getAttribute("href");

  // ["new-tab", "index"]
  window.history.pushState(null, null, miRuta); // window = objeto que representa al navegador
  /* 
   * PUSH STATE:
   * tiene 3 parametros:
   * el primer parametro sirve para mandar un objeto de estado de la pagina
   * el segundo parametro cambia el titulo pero no funciona y no es soportado por ningun navegador por lo que normalmente se deja en null
   * el ultimo espera un string que se agrega a la navegación
   */

  // console.log(miRuta)
  cargarContenido(miRuta);
})

function cargarContenido(ruta){
    // AJAX: Async Javascript and XML
    const ajax = new XMLHttpRequest(); // genera un objeto ajax

    // informamos que la peticion que queremos hacer es por el metodo get y el recurso al cual queremos acceer
    ajax.open("get", routes[ruta].url)
    ajax.send(); //enviar el request
    ajax.addEventListener("load", e => {
      contenido.innerHTML = ajax.response;

      //para cambiar el titulo con SPA
      document.title = routes[ruta].titulo // es lo mismo que usar document.querySelector("title").textContent
    })
  
    // esto es codigo asincrono ya que la unica manera de manejar la respuesta del ajax es mediante un evento que le avisa que la información ya llego
}