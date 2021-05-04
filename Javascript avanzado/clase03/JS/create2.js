const nav = document.querySelector('nav');

const data = [
  { url: 'https://twitter.com', texto: 'Twitter'},
  { url: 'https://google.com', texto: 'Google'},
  { url: 'https://facebook.com', texto: 'Facebook'}
];

const frag = document.createDocumentFragment(); // <></>


data.forEach(obj => {
  const negrita = document.createElement('strong');
  negrita.textContent = obj.texto;

  const enlace = document.createElement('a');
  enlace.textContent = obj.texto;
  enlace.href = obj.url;

  frag.appendChild(enlace); //modifica el DOM, produce reflow (breve momento en que la pagina queda totalmente congelada)
  // MIENTRAS MAS ELEMENTOS MAS REFLUJOS, con 3 no hay problema pero 500 pueden ser conflictivos por que van a demorar la carga de la pagina para evitar esto creamos un fragmento vacio llamado frag
});

nav.appendChild(frag); // fragmento transmite sus hijos al elemento nav