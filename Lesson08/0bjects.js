let person = {
  name: 'Juan',
  lastname: 'Jimenes',
  age: 41,
  fullname: function(){
    return this.name + ' ' + this.lastname;
  }
}

console.log(person.name + ' ' + person.lastname)

for(valueperson in person){
  console.log(person[valueperson])
}

objPerson = Object.values(person)

console.log(objPerson)

dataPerson = JSON.stringify(person)

console.log(dataPerson)