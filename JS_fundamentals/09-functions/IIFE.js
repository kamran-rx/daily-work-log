// An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed 
// immediately after it is created.

// It is mainly used to:

// Create a private scope
// Avoid polluting the global namespace
// Execute code only once
// Initialize variables

// SYNTAX

// (function (){
           
// }) ()

// example

(function (){
                console.log("hello World")      
}) ()

// named + parameters
// you can name it and can also pass arguments

let add = (function  sum (a,b) {
               
                   return `a + b is ${a+b}`
} )(10,20)
 // console.log(sum()) // cannot do this , becoz sum is available inside only
 console.log(add) //  a + b is 30

 