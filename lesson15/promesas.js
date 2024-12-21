async function pedir_taxi() {
  console.log('inicio de la promesa');
  let taxi = new Promise((inicio) => {
    setTimeout(() => inicio('Pidiendo taxi...'), 5000);
  });
  console.log(await taxi);
  //second promise
  let taxi_alive = new Promise((ready) => {
    setTimeout(() => ready('Llegó el taxi...'), 2000);
  })
  console.log(await taxi_alive);
  console.log('fin de la promesa');
}

pedir_taxi()