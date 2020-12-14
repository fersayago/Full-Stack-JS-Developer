function cargarImagen() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://picsum.photos/640/480");
  xhr.responseType = "blob";

  //el this con las funciones flecha cambia
  xhr.onload = () => {
    //alert(this.readyState);
    if ((xhr.status == 200) & (xhr.readyState == 4)) {
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
  

  function init(){
    let dropZone = document.getElementById("dropTarget");
    dropZone.ondragover = function(evt)
  }

  xhr.onprogress = function (evt) {
    if (evt.lengthComputable) {
      console.log(evt.loaded, evt.total);
    }
  };

  xhr.send();
}
