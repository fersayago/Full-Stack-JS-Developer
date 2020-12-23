function cargarImagen() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://picsum.photos/640/480");
  xhr.responseType = "blob";

  //el this con las funciones flecha cambia
  xhr.onload = () => {
    //alert(this.readyState);
    if ((xhr.status == 200) && (xhr.readyState == 4)) {
      //ALTERNATIVA 1:
      //let urlTemportal = URL.createObjectURL(xhr.response);
      //document.getElementById("imagen").src = urlTemportal;
      //ALTERNATIVA 2:
      let reader = new FileReader();
      reader.readAsDataURL(xhr.response);
      reader.onload = function(){
        document.getElementById("imagen").src = reader.result;
      }
    }
  };
  
  xhr.onprogress = function (evt) {
    if (evt.lengthComputable) {
      console.log(evt.loaded, evt.total);
    }
  };

  xhr.send();
};

function init(){
  //PARA PRACTICAR EVENTOS DE DRAG & DROP
  let dropZone = document.getElementById("dropTarget");

  dropZone.ondragover = function(evt){
    //cambiar estilo en dragover
    dropZone.style.borderStyle = "dotted";
    dropZone.style.backgroundColor = "grey";

    console.log("ondragover", evt)
    evt.preventDefault();
    evt.stopPropagation();

  }

  dropZone.ondrop = function(evt){
    dropZone.style.backgroundColor = "lightgrey";

    evt.preventDefault();
    evt.stopPropagation();
    //Al arrastrar la imagen al dropZone copiamos su URL para ir a buscarla luego
    let urlTemporal = URL.createObjectURL(evt.dataTransfer.files[0]);
    document.getElementById("imagen").src = urlTemporal

    //TODO: continuar video 2:13:33

    console.log("ondrop", evt.dataTransfer.files[0]);
  }
}
