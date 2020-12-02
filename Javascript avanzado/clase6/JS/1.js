function cargarImagen() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://picsum.photos/640/480");
  xhr.responseType = "blob";

  //el this con las funciones flecha cambia
  xhr.onload = () => {
    if ((xhr.status == 200) & (xhr.readyState == 4)) {
      let urlTemportal = URL.createObjectURL(xhr.response);
      console.log(urlTemportal);
      document.getElementById("imagen").src = urlTemportal;
    }
  };

  xhr.onprogress = function (evt) {
    if (evt.lengthComputable) {
      console.log(evt.loaded, evt.total);
    }
  };

  xhr.send();
}
