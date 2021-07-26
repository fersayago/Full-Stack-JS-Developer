const routes = {
  "/": {
    url: "views/home/index.html",
    titulo: "Bienvenidos!",
  },
  "/home": {
    url: "views/home/index.html",
    titulo: "Bienvenidos!",
    cache: null,
    estado: {}
  },
  "/products": {
    url: "views/productos.html",
    titulo: "Nuestros productos",
    estado: {}
  },
  "/contact": {
    url: "views/contacto.html",
    titulo: "Estamos para usted",
    estado: {} 
  },
  "/upload": {
    url: "views/upload/index.html",
    titulo: "A subir archivos"
  },
  error404: {
    url: "404.html",
    titulo: "Error 404",
    estado: {}
  }
}