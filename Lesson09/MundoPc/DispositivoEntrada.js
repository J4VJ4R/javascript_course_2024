class DispositivoEntrada{
  constructor(tipoEntrada, marca){
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }
  get tipoEntrada(){
    return this._tipoEntrada;
  }
  set tipoEntrada(tipoEntrada){
    this._tipoEntrada = tipoEntrada;
  }
  get marca(){
    return this._marca;
  }
  set marca(marca){
    this._marca = marca;
  }
}
class Raton extends DispositivoEntrada{
  static contadorRatones = 0;
  constructor(tipoEntrada, marca){
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }
  get idRaton(){
    return this._idRaton;
  }
  toString(){
    return `Raton: [idRaton: ${this._idRaton} Tipo de entrada: ${this._tipoEntrada} Marca: ${this._marca}]`;
  }
}
class Teclado extends DispositivoEntrada{
  static contadorTeclado = 0;
  constructor(tipoEntrada, marca){
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclado;
  }
  get idTeclado(){
    return this._idTeclado;
  }
  toString(){
    return `Teclado: [idTeclado: ${this._idTeclado} Tipo de entrada: ${this._tipoEntrada} Marca: ${this._marca}]`
  }
}
class Monitor{
  static contadorMonitor = 0;
  constructor(marca, tamaño){
    this._idMonitor = ++Monitor.contadorMonitor;
    this._marca = marca;
    this._tamaño = tamaño;
  }
  get idMonitor(){
    this._idMonitor;
  }
  get marca(){
    return this._marca;
  }
  set marca(marca){
    this._marca = marca;
  }
  get tamaño(){
    return this._tamaño;
  }
  set tamaño(tamaño){
    this._tamaño = tamaño;
  }
  toString(){
    return `Monitor: [idMonitor: ${this._idMonitor} Marca: ${this._marca} Tamaño: ${this._tamaño}]`
  }
}
class Computadora{
  static contadorComputadora = 0;
  constructor(nombre, monitor, teclado, raton){
    this._idComputadora = ++Computadora.contadorComputadora;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }
  get idComputadora(){
    return this._idComputadora;
  }
  toString(){
    return `Computadora: ${this._idComputadora}
            Nombre: ${this._nombre}
            ${this._monitor}
            ${this._teclado}
            ${this._raton}`
  }
}
monitor1 = new Monitor('HP', 27);
teclado1 = new Teclado('USB', 'HP');
raton1 = new Raton('Bluetooth', 'Magic')

monitor2 = new Monitor('Armado', 29);
teclado2 = new Teclado('USB', 'LG');
raton2 = new Raton('Bluetooth', 'Dell')

computadora1 = new Computadora('HP', monitor1, teclado1, raton1);
computadora2 = new Computadora('APPLE', monitor2, teclado2, raton2);
console.log(`${computadora1}`)
console.log(`${computadora2}`)
//orden
class Orden{
  static contadorOrden = 0;
  constructor(){
    this._idOrden = ++Orden.contadorOrden;
    this._computadoras = [];
  }
  get idOrden(){
    this._idOrden;
  }
  agregarComputadora(computadora){
    this._computadoras.push(computadora)
  }
  mostrarOrden(){
    let computadorasOrden = '';
    for(let computadora of this._computadoras){
      computadorasOrden += `\n${computadora}`;
    }
    console.log( `Orden: ${this._idOrden} [Computadoras: ${computadorasOrden}]`);
  }

}
let orden1 = new Orden()
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden()