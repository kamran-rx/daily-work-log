// Map in js

// map is an array method , that creates a new array by transformig every element of
// an existing array

// returns an array

let arr = [1,2,3,4,5,6]
let new_arr = arr.map(
            function (elem , index){
                 return  `${elem} at ${index} index` 
            }
)
console.log(new_arr)

// we can also use arrow function

let arr_2 = [2,4,6,8,10]

let new_arr2 = arr_2.map((item)=> item+2)

console.log(new_arr2)
