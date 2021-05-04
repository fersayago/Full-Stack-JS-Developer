const nav = document.querySelector("nav");
nav.addEventListener('click', accion)

function accion(e){
  let origen = e.target;
  if (origen.tagName == 'NAV') {
    return
  }

  //el origen contiene la clase 'btn'. si es si el origen es el boton div, sino voy a escalar hasta encontrar su proximo padre con clase 'btn'
  let btn = (origen.classList.contains('btn'))? origen : origen.closest('.btn'); //busca el elemento con la clase btn mas cercano

  console.log(e.target); // ref a el object HTML que originó el evento

  document.getElementById('caja').innerHTML = btn.dataset.idproducto;
}