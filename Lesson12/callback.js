function functionCallback(){
  console.log("saludo1")
}
function suma(a, b){
  let result = a + b;
  functionCallback(result)
}

//calll with asincronous functions
setTimeout(() => console.log("saludo 3"), 3000)

setTimeout(functionCallback, 6000)

setTimeout(function(){console.log("saludo 5")}, 7000)

setTimeout(() => console.log("saludo 8"), 9000)