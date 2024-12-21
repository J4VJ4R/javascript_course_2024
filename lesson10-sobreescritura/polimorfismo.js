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
// console.log(empleado1.muestraDatos())
class Gerente extends Empleado{
  constructor(nombre, edad, departamento){
    super(nombre, edad);
    this._departamenteo = departamento;
  }
  muestraDatos(){
    return `Gerente: [${super.muestraDatos()} Departamento: ${this._departamenteo}]`
  }

}
//Polimorfismo
function determinarTipo(tipo){
  if(tipo instanceof Gerente){
    console.log(tipo.muestraDatos())
    console.log("Es de tipo Gerente")
  }else if(tipo instanceof Empleado){
    console.log(tipo.muestraDatos())
    console.log("Es de tipo Empleado")
  }else if(tipo instanceof Object){
    console.log("Es de tipo Ojbect")
  }
}
//test
gerente1 = new Gerente('Bertario', 62, 'Construcción')
determinarTipo(gerente1)
determinarTipo(empleado1)