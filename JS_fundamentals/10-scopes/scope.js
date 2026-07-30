// scopes in js
// {} --> block scope
// outside {} is global scope

let a =20 ;

if(true){
           console.log(a);// we can acces the variable because it is decalared in global scope
}



if(true){
    let name = " abcde";
}

//console.log(name) // error , name is not defined 

// it is same in case of const but not in case of var 

if (true){
             var age = 23;
}
console.log(age) // accessible


//  important //

function one (){
                 let name_one= "This is function one name"             
           
            function two (){
                        let name_two = "this is function two name"
                        console.log(name_one)
            }

            two()
           // console.log(name_two) // error
}
one()

// reason : small function ( that is inside of a function) can use the outside function 
// variable beacause for it , funtion one is global scope
// but bigger function ( that is outside function ) cannot use the inner function variable
