
const nav = document.querySelector('nav');


// creamos un 'a' para agregar en el nav
const enlace = document.createElement('a') // <a></a>

enlace.textContent = "Wikipedia" // <a>Wikipedia</a>

enlace.href = "https://wikipedia.org" // <a href="https://wikipedia.org">Wikipedia</a>


// una vez armado el objeto ya podemos agregarlo al DOM con createElement

nav.appendChild(enlace);

// MANERA INCORRECTA DE HACERLO YA QUE NO ES PERFORMANTE
/* nav.innerHTML = '<a href="https://wikipedia.org">Wikipedia</a>' */

// AGREGAR DE  A VARIOS ENLACES DE FORMA DINAMICA

const data = [
  { url: 'https://twitter.com', texto: 'Twitter'},
  { url: 'https://google.com', texto: 'Google'},
  { url: 'https://facebook.com', texto: 'Facebook'}
];


data.forEach(obj => {
  const enlace = document.createElement('a');
  enlace.textContent = obj.texto;
  enlace.href = obj.url;

  nav.appendChild(enlace);
})