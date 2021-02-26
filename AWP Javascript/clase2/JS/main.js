/* ------------------------------------------------- */
/*                 VARIABLES GLOBALES                */
/* ------------------------------------------------- */
let listaProductos = [
  { nombre: "Pan",    cantidad: 2, precio: 12.34 },
  { nombre: "Carne",  cantidad: 3, precio: 34.56 },
  { nombre: "Leche",  cantidad: 4, precio: 56.78 },
  { nombre: "Fideos", cantidad: 5, precio: 78.92 },
  { nombre: "Arroz",  cantidad: 3, precio: 10.12 }
];

let crearLista = true;

let ul

/* ------------------------------------------------- */
/*                 FUNCIONES GLOBALES                */
/* ------------------------------------------------- */

function borrarProducto(index){
  listaProductos.splice(index,1);
  renderLista();
}

function renderLista() {

  if (crearLista){
    ul = document.createElement("ul");
    ul.classList.add("demo-list-icon", "mdl-list", "w-100");
  }

  ul.innerHTML = '';

  listaProductos.forEach( (producto, index) =>{

    ul.innerHTML += `<ul class="demo-list-icon mdl-list w-100">
            <li class="mdl-list__item">
              <!-- ICONO DEL PRODUCTO -->
              <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-icon">shopping_cart</i>
              </span>

               <!-- NOMBRE DEL PRODUCTO -->
              <span class="mdl-list__item-primary-content w-30"> ${producto.nombre} </span>

              <!-- ENTRADA DE CANTIDAD -->
              <span class="mdl-list__item-primary-content w-20">
                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                >
                  <input
                    value="${producto.cantidad}"
                    class="mdl-textfield__input"
                    type="text"
                    id="sample-cantidad-${index}"
                  />
                  <label class="mdl-textfield__label" for="sample-cantidad-${index}"
                    >Cantidad</label
                  >
                </div>
              </span>

              <!-- ENTRADA DE PRECIO -->
              <span class="mdl-list__item-primary-content w-20 ml-item">
                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                >
                  <input
                    class="mdl-textfield__input"
                    value="${producto.precio}"
                    type="text"
                    id="sample-precio-${index}"
                  />
                  <label class="mdl-textfield__label" for="sample-precio-${index}"
                    >Precio</label
                  >
                </div>
              </span>

              <!-- BOTON DE BORRADO -->
              <span class="mdl-list__item-primary-content w-20 ml-item">
                <button onclick="borrarProducto(${index})"
                  class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
                >
                  <i class="material-icons">remove_shopping_cart</i>
                </button>
              </span>
            </li>`;

  })

  

  if (crearLista === true){
    document.getElementById('lista').appendChild(ul);
  }

  crearLista = false;
}

function start() {
  console.log(document.querySelector("title").textContent);
  renderLista()
}

/* ------------------------------------------------- */
/*                      EJECUCION                    */
/* ------------------------------------------------- */

start();
