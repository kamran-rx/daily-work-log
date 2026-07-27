//  Variables in javascript
//  Container to store value
//  we can store values in three ways

// using let 

let name = "kamran" ;
// console.log(name) ;

// 1 .let can be changed , like

name = "khan";
console.log(name) 

// 2. let has block scope
{
     let age  = 23;
     console.log(age) // output = 23 .

}
 console.log(age)  // output : reference error , age is not defined.

// 3. let cannot be accessed before initialization .

    console.log(a)

    let a = 23;

// 2 .   CONST

 const hours_in_day = 24;

 hours_in_day = 12;  // output : gives error , const cannot be changed 

// const also has block scope + cannot be accessed before initialization. 

// 3 .  VAR

// has function scope , can be accessed outside block scope

{

      var greet = "hello";
}
console.log(greet)

// can be accessed before initialization but give  "undefined"


console.log(email) // output  = undefined



var email = "1234@gmail.com"


 