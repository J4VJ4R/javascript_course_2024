const mifunción_flecha = () =>{
  console.log("Desde función arrow")
}
mifunción_flecha()

//arrow function with objects
const withObject = () => ({"nombre": "Javier"})
console.log(withObject());

//arrow function wit parameters
const withParameter = greates => console.log(greates)
withParameter('Greates2')

//add function with arrow function
const add = (a, b) => {
  let result = a + b;
  return result;
}
console.log(add(2, 3));