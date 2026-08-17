// loop use for iterating over array

            // Syntax
//        for (const element of object) {
    
//             }

// let arr = ["a","b","c","d"];
// for (const elem of arr) {
//     console.log(elem)
// }


// for in

// mainly used to iterate over object 

const myobj= {
                   a : 1 ,
                   b : 2 ,
                   c : 3
}

for (const key in myobj) {
   console.log(`${key} : ${myobj[key]} `) // will give you key and its value
    
}