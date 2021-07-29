const fs = require('fs');

// ? DOCUMENTACIÓN FILESYSTEM:
// ? https://nodejs.org/dist/latest-v16.x/docs/api/fs.html

/* --------------------------------------------------- */
/*      READ / WRITE FILE SYSTEM FORMA SINCRONICA      */
/* --------------------------------------------------- */

// no conviene usar esta forma para ciertos procesos (ej: lectura y escritura de archivos) ya que bloquea el servidor de node.js para otros procesos.

// ! retomar 56:30