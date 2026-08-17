// foreach method is used to iterate over the array

//array.forEach(function(element, index, array) {
    // code to execute
// });

// The callback function can receive three arguments:

// element → current value
// index → current position
// array → the original array

let arr = [1,2,3,4,5,6,7]

arr.forEach(  
              function (val){
                 console.log(val)
              }
)

//or we can use arrow function as well

arr.forEach(
                  (i) =>{
                    console.log(i) 
                  }
)