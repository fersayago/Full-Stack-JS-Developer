const retardoSync = () => { for(let i=0; i<3e9; i++);}

//retardo asincronico que use callbacks
const retardoAsyncCallback = cb => setTimeout(cb,3000)

// retardo asincronico con promise
// dejo pendiente un proceso hasta que esto se concrete
const retardoAsyncPromise = () => new Promise((resolve, reject) => setTimeout(resolve,3000));

module.exports = {
  retardoSync,
  retardoAsyncCallback,
  retardoAsyncPromise
}