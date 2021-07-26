const contenido = document.getElementById("contenido");
const nav = document.querySelector("nav");

window.addEventListener("load", reconstruirPagina);

window.addEventListener("popstate", reconstruirPagina);

nav.addEventListener("click", (e) => {
  if (e.target.tagName == "NAV") {
    return;
  }

  e.preventDefault();

  let miRuta = e.target.getAttribute("href");

  history.pushState(routes.miRuta, null, miRuta);

  // console.log(miRuta)
  cargarContenido(miRuta);
});

function cargarContenido(ruta) {
  contenido.innerHTML = "Cargando...";

  if (ruta in routes == false) {
    ruta = "error404";
  }


  if ("cache" in routes[ruta] && routes[ruta].cache) {
    contenido.innerHTML = routes[ruta].cache;
    document.title = routes[ruta].titulo;
    
    return
  }
  const ajax = new XMLHttpRequest();

  ajax.open("get", routes[ruta].url);
  ajax.send(); 
  ajax.addEventListener("load", (e) => {
    contenido.innerHTML = ajax.response;

    // tomamos todos los scripts del contenido para agregarlos en un array
    recrearScripts();

    routes[ruta].cache = ajax.response;

    document.title = routes[ruta].titulo;
  });
}

function reconstruirPagina(e) {
  let miRuta = location.pathname;
  cargarContenido(miRuta);
}

// ! recreamos los scripts dentro de los HTML a los que accedemos con el innerHTML en la seccion de contenido
function recrearScripts(){
  const scripts = contenido.querySelectorAll("script");
  const fuentes = [];

  scripts.forEach(s  => {
    fuentes.push(s.getAttribute("src"));
    s.remove();
  })

  const frag = document.createDocumentFragment();

  fuentes.forEach(f => {
    let nuevoScript = document.createElement("script");
    //nuevoScript.src = f;
    nuevoScript.setAttribute("src", f);
    frag.appendChild(nuevoScript);
  })
  contenido.appendChild(frag);
}

// ! Mediante esta funcion se leyeron todos los scripts funcionales y se recrearon de nuevo. Si se agrega JS mediante innerHTML no va a funcionar.
// ! La unica manera de que funcione es hacer un appendChild de un script nuevo creado mediante programacion.
// esto es por seguridad ya que no se sabe lo que puede venir por ajax y puede ser contenido malicioso.