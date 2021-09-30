const dropzone = document.getElementById("dropzone");
const tarjetero = dropzone.querySelector("section");
const input = document.getElementById("dropzone-input");
const botonSubirImagenes = document.getElementById("subir-imagenes");
let archivosParaSubir = [];

botonSubirImagenes.addEventListener("click", e =>{

  let fd = new FormData();

  fd.append("user", "pepe");
  fd.append("edad", 18);
  archivosParaSubir.forEach( blob => fd.append("fotografias", blob));


  const xhr = new XMLHttpRequest();
  xhr.open("post", "subir.php");

  xhr.addEventListener("load", e =>{
    alert("Todos los archivos subidos");
  })
  xhr.send(fd)
})


input.addEventListener("change", e => {
  //console.dir(e.target);
  representarArchivos(e.target.files);
})

function representarArchivos (listaArchivos){

  let fr = document.createDocumentFragment();

  Array.from(listaArchivos).forEach(blob =>{
    let card = document.createElement("div");
    card.className = "thumbnail";
    card.innerHTML = `
      <img src="${URL.createObjectURL(blob)}" width="200">
      <p>${blob.name}</p>
      <p>${(blob.size/1024).toFixed(2)} KBs</p>
    `;

    fr.appendChild(card);

    archivosParaSubir.push(blob);

  });
  tarjetero.appendChild(fr);
}