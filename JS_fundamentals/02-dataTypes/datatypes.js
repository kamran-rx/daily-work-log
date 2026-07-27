// data types in js
// Describes what kind of value the variable holds.
// JS have main 8 datatypes(7 - primitive , 1- non-primitive)


// 1. string
let greet = "hello";
console.log(typeof greet) // output is string

let name = "Ahmed";
let message = 'Hello JavaScript';

console.log(name);


//2 . null
// It is representation of an empty value
// Null  is actually a standalone value
// Absence of an object
// because its type is "Object"
let a =null;
console.log(typeof(a))

// 3. undefined

// It is an absence of a value

let name ;
console.log(name)

// 4. Bigint

//5 . Number 
//6. boolean 
let ishappy = true;
console.log(ishappy)
 
//7. symbol 

// All the above seven datatypes are primitive

// Non primitive datatype 
// Object
// stores collection of data 

let user = {
    name: "Ali",
    age: 22,
    role: "Intern"
};

console.log(user);