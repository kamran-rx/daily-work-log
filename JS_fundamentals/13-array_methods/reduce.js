//               reduce()
// Used to combine array elements into a result.
// Can return a number, string, object, array, etc.
// Uses an accumulator.
// An initialValue is strongly recommended.

// important to know
// No initial value: first array element becomes the accumulator.
// With initial value: accumulator starts with your specified value.
// Empty array + no initial value: TypeError.

let array = [ 20,30,40,50,60,70]

let reduced_arr = array.reduce(function(accumulator,currentval){
                return accumulator + currentval
} , 0 )

console.log(reduced_arr) // output = 270
