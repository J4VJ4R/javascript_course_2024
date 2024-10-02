class Persona{
  static contadorPersonas = 0;

  constructor(nombre, apellido, edad){
    this._idPersona = ++Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
  get idPersona(){
    return this._idPersona;
  }
  get nombre(){
    return this._nombre
  }
  set nombre(nombre){
    this._nombre = nombre;
  }
  get apellido(){
    return this._apellido;
  }
  set apellido(apellido){
    this._apellido = apellido;
  }
  get edad(){
    return this._edad;
  }
  set edad(edad){
    this._edad = edad;
  }
  toString(){
    return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`
  }
}
class Empleado extends Persona{
  static contadorEmpleados = 0;
  
  constructor(nombre, apellido, edad, sueldo){
    super(nombre, apellido, edad)
    this._idEmpleado = ++Empleado.contadorEmpleados;
    this._sueldo = sueldo;
  }
  get idEmpleado(){
    return this._idEmpleado;
  }
  get sueldo(){
    return this._sueldo;
  }
  set sueldo(sueldo){
    this._sueldo = sueldo;
  }
  toString(){
    return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`
  }
}
class Cliente extends Persona{
  static contadorCliente = 0;
  constructor(nombre, apellido, edad, fechaRegistro){
    super(nombre, apellido, edad)
    this._idContadorCliente = ++Cliente.contadorCliente;
    this._fechaRegistro = fechaRegistro;
  }
  get idCliente(){
    return this._fechaRegistro;
  }
  get fechaRegistro(){
    return this._fechaRegistro;
  }
  set fechaRegistro(fechaRegistro){
    this._fechaRegistro
  }
  toString(){
    return `${super.toString()} ${this._idContadorCliente} ${this._fechaRegistro}`
  }
}
//prueba persona
persona1 = new Persona('Anuel', 'Borda', '20')
console.log(persona1.toString())

persona2 = new Persona('Bertario', 'Paz', 44)
console.log(persona2.toString())

//prueba empleado
empleado1 = new Empleado('Karla', 'Benedeti', 33, 5000)
console.log(empleado1.toString())

empleado2 = new Empleado('Diana', 'Doneti', 22, 6000)
console.log(empleado2.toString())

//prueba cliente
cliente1 = new Cliente('Enano', 'Siete', 33, new Date())
console.log(cliente1.toString())

cliente2 = new Cliente('Fernanda', 'Serrano', 22, new Date())
console.log(cliente2.toString())