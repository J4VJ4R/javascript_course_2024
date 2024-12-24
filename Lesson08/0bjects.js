//class

class Person {
  constructor(name, lastname){
    this._name = name;
    this._lastname = lastname;
  }

  get name(){
    return this._name;
  }

  set name(name){
    this._name = name
  }
}

class Employer extends Person{
  constructor(name, lastname, cargo){
    super(name, lastname);
    this._cargo = cargo;
  }

  get cargo(){
    return this._cargo;
  }

  set cargo(cargo){
    this._cargo = cargo;
  }
}
let user1 = new Person('Juan', 'Jara')
console.log(user1)
let user2 = new Person('Carlos', 'Caracol');
console.log(user2)
console.log(user1.name)
user1.name = 'Oscar';
console.log(user1.name)  

let employer1 = new Employer('Armando', 'Vendedor', 'Ventas');
console.log(employer1)