
//  arrow function

(n1,n2)=>{
      return n1+n2;   
}    // this is an anonymous arrow function , you can call it by two ways
     // 1. store it in a variable 
     // 2 . IIFE

// console.log((2,2))

 //  store it in a variable
  let add  = (a,b)=> {
    return a + b
  }
  console.log(add(2,5))

  // you can make arrow function like this as well

  let sum  = (num1,num2) => num1 + num2;

 console.log(sum(2,9))
 // arrow function has no "this" of its own 
 // it takes "this " from the surrounding scope


 let obj = {
                name : " jamal" ,
                age : 22,
                greet : () => {
                          console.log(`hello , ${this.name}`) // print hello , undefined 
                }

 }
//  console.log(obj.greet())


 let test =()=>{
           console.log(this) // points to empty object , {}
 }
 console.log(test())

 // while returning object a common mistake is

 let arrow1 = ()=>{
      name:"abc" 
      age:33
 }
 console.log(arrow1())// {} undefined , undefined

 // correct  way

 let arrow2 = ()=> ({
              name:"xyz",
              age:44
 })
 console.log(arrow2()) 
 