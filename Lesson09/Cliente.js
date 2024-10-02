class Cliente extends Persona{
  static contadorCliente = 0;
  constructor(fechaRegistro){
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
}