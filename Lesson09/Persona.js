class Persona{
  static contadorPersonas = 0;

  constructor(nombre, apellido, edad){
    this._idPersona = ++Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
  get _idPersona(){
    return this._idPersona;
  }
  get _nombre(){
    return this._nombre
  }
  set _nombre(nombre){
    this._nombre = nombre;
  }
  get _apellido(){
    return this._apellido;
  }
  set _apellido(apellido){
    this._apellido = apellido;
  }
  get _edad(){
    return this._edad;
  }
  set _edad(edad){
    this._edad = edad;
  }
  toString(){
    return `${_nombre} ${_apellido} ${_edad}`
  }
}