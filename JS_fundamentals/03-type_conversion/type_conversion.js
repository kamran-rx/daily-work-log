// type conversion in JS

// In Js, we can convert one datatype into another like

// 1.  Into a number we use " Number()"
let str = "7"
console.log(typeof str); // string

let num = Number(str);
console.log(typeof num) // number 

// Important to know that 

 //  "33"---> 33 ---> type is number
 //  "4ab"---> NaN ---> number
 //  "string"---> NaN ---> number
 //   true ---> 1 ---> number
 //   false ---> 0 ---> number

 //  null ---> 0 ---> number

 // undefined ---> NaN ---> number


// 2. Into a string using String()

let number = 23;

let string = String(number);
console.log(typeof string) // string 

// 3. Into a boolean 

let str_2 = "abc";

let boolean = Boolean(str_2);

console.log( boolean);


// Important to know that 

//  "33"---> true
// ""---> false
//"abc" ---> true
