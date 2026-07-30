// functions in JS
// a resuable block of code that perform a specific task

// function declaration
function sum (parameter1,parameter2){
           return parameter1+parameter2
        // anything after return is ignored
        console.log("hello")

}        // this function return something

let result = sum(2,2)
console.log(result)

// you can use default values as well

function add ( a =2, b=5 ){
        return a+b;
}
console.log(add())
console.log((add(5,5)))// if you pass values then the default will be ignored

// function expression
// assigning a funtion to a variable 

let greet = function(){               // anonymous function bcoz it has no name
            console.log("hello world!")
}
console.log(greet()) // hello world + undefined

// you can also use named function expression like ,

let greet_two = function hello(){
          console.log(" this is greet function")
}
console.log(greet_two())// gives this is greet function + undefined
//  console.log(hello())  // you cant use this , it will give reference error 
// because the hello()is only available inside the function not outside 
// if you call it inside a function then it will work correctly