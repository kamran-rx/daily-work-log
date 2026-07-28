// Strings In JS
/* A string is a sequence of characters enclosed in:
 Single quotes: 'Hello'
 Double quotes: "Hello"
 Backticks (template literals): `Hello` */
// 1. Strings In Js are indexed
// For example
let str = "hello World"
console.log(str[0]);// h
console.log(str[3]);// l

// 2. strings are immutable , you cannot modify its value 
// The methods we use on strings just gave us new strings

//  string property---> length
let string =  "hey"
console.log(string.length);// 3
// string methods 
let strr = "my name is kamran"
console.log(strr.charAt(4)); // a 
console.log(strr.indexOf("n")); // 3 
console.log(strr.includes("is")); // if present - true , absent - false

// more methods

  // if i want to achieve this pattern ****456
let bank_acc = "345";
console.log(bank_acc.padStart(7,"*")); // first one shows full length , 2nd what character to show
// 456***** ---> use padEnd()

   // Slice()
let day = "Sunday"
console.log(day.slice(2,5));// start (included) , End(excluded)(optional),if end is not mentioned
// then slice cut the string all way to the end.
   // split()
// splits the string into the "array" based on separator
console.log(day.split("n",2)) // takes separator and limit 
// separator ---> on basis of which you want to split
// limit ----> how many pieces to keep in the array

console.log(day.toUpperCase());
console.log(day.toLowerCase());

let str_2= "     hello    "
console.log(str_2.trim()); // cut spaces start and end .
console.log(str_2.trimStart())
console.log(str_2.trimEnd())








 

