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

let user1 = new Person('Juan', 'Jara')
console.log(user1)
let user2 = new Person('Carlos', 'Caracol');
console.log(user2)
console.log(user1.name)
user1.name = 'Oscar';
console.log(user1.name)  