'use strict'

try {
  let  x = '';
  if(x == '') throw "No es un número"
} catch (error) {
  console.log(error)
  
} finally{
  console.log("Fin de la revisión...")
}

console.log("continuemos")