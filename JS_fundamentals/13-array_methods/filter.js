//        filter()
// Used to select specific elements.
// Returns a new array.
// The callback should return true or false.
// Can return fewer elements, or even an empty array.

let arr = [1,2,3,4,5,6,7,8,9]

let filtered_arr = arr.filter(function(item){
      return item>5
})
console.log(filtered_arr)