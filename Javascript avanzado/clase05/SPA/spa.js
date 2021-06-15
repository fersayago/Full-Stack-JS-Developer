// Single Page Application / SPA
let links = document.querySelectorAll("a");
let main = document.querySelector("main")

links.forEach((link) => {
  link.addEventListener("click", (e)=>{
    // e.target.id
    let id = link.id
    let archivo = id + ".html"
    let xhr = ajax(archivo)
    xhr.addEventListener("load", ()=>{
      if (xhr.status == 200) {
        main.innerHTML = xhr.response;
      }
    })
  })
})

let pagina_inicial = ajax("home.html")
pagina_inicial.addEventListener("load", ()=>{
  main.innerHTML = pagina_inicial.response
})

function ajax(url, metodo){
  // Si no recibe el parámetro método entonces es "GET"
  let http_metodo = metodo || "GET"
  let xhr = new XMLHttpRequest
  xhr.open(http_metodo, url)
  xhr.send()
  // Retorno el objeto XHR entero ya que no se puede retornar la respuesta
  return xhr
}