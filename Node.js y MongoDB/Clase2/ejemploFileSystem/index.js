const fs = require("fs");

/* --------------------------------------------- */
/*   READ / WRITE FILE SYSTEM FORMA SINCRÓNICA   */
/* --------------------------------------------- */
/* 
console.log('Inicio del programa')

try{
  //leer los datos del archivo de texto
  let datos = fs.readFileSync('../datos.txt', 'utf-8')
  console.log('RD ok:', datos, '\nlargo:', datos.length);

  //escribo un archivo en forma sincrónica (agrego dia y hora)
  fs.writeFileSync('../datos.txt', new Date().toLocaleString())
  console.log('WR ok')

  //leo el archivo modificado
  datos = fs.readFileSync('../datos.txt', 'utf-8')
  console.log('RD2 ok:', datos, '\nlargo:', datos.length);

} catch(error){
  console.log(`Error en operación sincrónica de FS ${error}`)
}

console.log('otras tareas...') */

/* --------------------------------------------- */
/*   READ / WRITE FILE SYSTEM FORMA ASINCRÓNICA  */
/* --------------------------------------------- */

console.log("Inicio del programa");

//leer los datos del archivo de texto de forma asincronica
let datos = fs.readFile("../datos.txt", "utf-8", (error, datos) => {
  if (error) throw new Error(`Error en lectura de archivo: ${error}`);
  console.log("RD ok:", datos, "\nlargo:", datos.length);

  //escribo un archivo en forma asincrónica (agrego dia y hora)
  //ANIDAMOS ESTE PROCESO DENTRO DEL ANTERIOR PARA DARLE UN
  //ORDEN AUNQUE SEA DE FORMA ASINCRONICA
  fs.writeFile("../datos.txt", new Date().toLocaleString(), (error) => {
    if (error) throw new Error(`Èrro en escritura de archivo: ${error}`);
    console.log("WR ok");

    //leo el archivo modificado de forma asincronica
    //ANIDAMOS ESTE PROCESO DENTRO DEL ANTERIOR PARA DARLE UN
    //ORDEN AUNQUE SEA DE FORMA ASINCRONICA
    datos = fs.readFile("../datos.txt", "utf-8", (error, datos) => {
      if (error) throw new Error(`Error en lectura de archivo: ${error}`);
      console.log("RD2 ok:", datos, "\nlargo:", datos.length);
    });
  });
});

console.log("Otras tareas...");
