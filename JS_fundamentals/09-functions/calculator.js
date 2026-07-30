 // a mini project on function ---> calculator


 let num1 = 5;
 let num2 = 10 ;
 let op = "+";

 function add(num1,num2){
          return num1+ num2;
 }

  function sub(num1,num2){
          return num1 - num2;
 }
  function mul(num1,num2){
          return num1 * num2;
 }
function div(num1,num2){
           return num1/num2;
}

if (op == "+"){
       console.log(add(num1,num2))
}

if (op == "-"){
       console.log(sub(num1,num2))
}

if (op == "*"){
       console.log(mul(num1,num2))
}

if (op == "/"){
       console.log(div(num1,num2))
}
