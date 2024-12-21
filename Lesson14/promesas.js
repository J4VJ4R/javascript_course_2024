let mipromesa = new Promise((resolve, rejected) => {
  let estado = false;
  if(estado)
    resolve('Se resolvió');
  else
    rejected('Hubo un error');
});

// mipromesa.then(
//   valor => console.log(valor),
//   error => console.log(error)
// )

mipromesa
.then(valor => console.log(valor))
.catch(error => console.log(error))