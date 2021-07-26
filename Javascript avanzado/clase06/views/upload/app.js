const dropzone = document.getElementById("dropzone");
const tarjetero = dropzone.querySelector("section");
const input = document.getElementById("dropzone-input");
const botonSubirImagenes = document.getElementById("subir-imagenes");
let archivosParaSubir = [];

botonSubirImagenes.addEventListener("click", e =>{

  // ! creamos el objeto FormData que nos permite generar en memoria un formulario vacio que nos permite agregar los datos que le enviamos al servidor
  let fd = new FormData();

  fd.append("user", "pepe");
  fd.append("edad", 18);
  archivosParaSubir.forEach( blob => fd.append("fotografias", blob));


  const xhr = new XMLHttpRequest();
  xhr.open("post", "subir.php");

  // debemos encriptar el body como form-data para poder enviar archivos
  xhr.addEventListener("load", e =>{
    alert("Todos los archivos subidos");
  })
  xhr.send(fd)
})

// los archivos que se suban a la dropzone van a estar guardados como un pseudo array en files
input.addEventListener("change", e => {
  //console.dir(e.target);
  representarArchivos(e.target.files);
})

function representarArchivos (listaArchivos){

  //creamos un fragmento para guardar los archivos
  let fr = document.createDocumentFragment();


  //convertimos el pseudoarray en un array para poder usar forEach
  Array.from(listaArchivos).forEach(blob =>{
    // console.log(blob);
    // queremos mostrar una miniatura de la imagen subida y vamos a llamar al objeto card
    let card = document.createElement("div");
    card.className = "thumbnail";
    card.innerHTML = `
      <img src="${URL.createObjectURL(blob)}" width="200">
      <p>${blob.name}</p>
      <p>${(blob.size/1024).toFixed(2)} KBs</p>
    `;

    // agregamos la tarjeta al fragmento
    fr.appendChild(card);

    archivosParaSubir.push(blob);

  });
  // para poder agregarlo a la section dentrod de la dropzone, debemos hacer un appendChild a la seccion
  tarjetero.appendChild(fr);
}