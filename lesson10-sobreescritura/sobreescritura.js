class Empleado{
  constructor(nombre, edad){
    this._nombre = nombre;
    this._edad = edad;
  }
  muestraDatos(){
    return `Empleado [Nombre: ${this._nombre} Edad: ${this._edad}]`
  }
}
//test
empleado1 = new Empleado('Ana', '44');
console.log(empleado1.muestraDatos())
class Gerente extends Empleado{
  constructor(nombre, edad, departamento){
    super(nombre, edad);
    this._departamenteo = departamento;
  }
  muestraDatos(){
    return `Gerente: [${super.muestraDatos()} Departamento: ${this._departamenteo}]`
  }

}
//test
gerente1 = new Gerente('Bertario', 62, 'Construcción')
console.log(gerente1.muestraDatos())