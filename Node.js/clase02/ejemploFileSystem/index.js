const fs = require("fs");

// ? DOCUMENTACIÓN FILESYSTEM:
// ? https://nodejs.org/dist/latest-v16.x/docs/api/fs.html

/* --------------------------------------------------- */
/*      READ / WRITE FILE SYSTEM FORMA SINCRONICA      */
/* --------------------------------------------------- */

// no conviene usar esta forma para ciertos procesos (ej: lectura y escritura de archivos) ya que bloquea el servidor de node.js para otros procesos.

/*
console.log('Inicio del programa')

 try {
  // LEO UN ARCHIVO DE FORMA SINCRONICA
  
  // para que no lea en formato de buffer (hex) es necesario pasarle el formato utf-8 para poder verlo en formato de string.
  let datos = fs.readFileSync('./datos.txt', 'utf-8');
  console.log('RD1 ok', datos, datos.length);

  //ESCRIBO UN ARCHIVO DE FORMA SINCRONICA

  fs.writeFileSync('./datos.txt', new Date().toLocaleString())
  console.log('WR ok')

  datos = fs.readFileSync('./datos.txt', 'utf-8');
  console.log('RD2 ok', datos, datos.length);
}
catch (error) {
  console.log(`Hubo un error en la operacion sincronica fs del tipo: ${error}`);
}

console.log('... otras tareas ...') */

/* --------------------------------------------------- */
/*      READ / WRITE FILE SYSTEM FORMA ASINCRONA       */
/* --------------------------------------------------- */

console.log("Inicio del programa");

// se maneja con una callback que se pasan el error y los datos como parametros
fs.readFile("./datosAsinc.txt", "utf-8", (error, datos) => {
  if (error)
    throw new Error(`Hubo un error en la lectura de archivo: ${error}`);
  console.log("Async RD1 ok", datos, datos.length);

  // escribo un archivo en forma asincronica que tambien devuelve un callback con el error
  fs.writeFile("./datosAsinc.txt", new Date().toLocaleString(), (error) => {
    if (error) throw new Error(`Error en escritura de archivo: ${error}`);
    console.log("Async WR ok");

    fs.readFile("./datosAsinc.txt", "utf-8", (error, datos) => {
      if (error)
        throw new Error(`Hubo un error en la lectura de archivo: ${error}`);
      console.log("Async RD1 ok", datos, datos.length);
    });
  });
});

// al tener los procesos desorganizados y sin un orden nos encontramos con el problema de que escribio el archivo antes de leerlos
// para poder solucionar esto vamos a poner que la escritura se realice dentro de la primera lectura y la segunda lectura dentro de la escritura

// en caso de haber varios anidamientos se puede generar un "callback hell" que confunde.

console.log("... otras tareas ...");
