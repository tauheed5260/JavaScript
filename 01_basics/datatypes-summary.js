// Primitive
// 7 types: String, Numbers, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


const bigNumber = 56575859836284340n


// Reference(Non-primitive)
//Array, Objects, Functions

const heros = ["Power Rangers", "Pokemon", "Sumrai"]
let myObj ={
    name:"Tauheed",
    age: 21,
}

const myFunction = function(){
    console.log("Hello! World");
    
}

console.log(typeof bigNumber);
