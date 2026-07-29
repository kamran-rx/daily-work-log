// arrays in js
 // arrays are ordered , indexing start with 0  (no decimal or negative indexing)
 // array can store different type of data


// declaration
 let arr = [1,2,3,4,5];
 console.log(arr);
                        // OR //
 let arr_2 = new Array("a","b","C"); // however if i pass one elem like new Array(3) means empty * 3 
 // due to this confusing behaviour we dont usually use this method
 console.log(arr_2);
               // accessing array elems
        console.log(arr[3]) ; // however if you gave the index that is not there give undefined not error
 

       // quick way to empty an array is
       let ar=[12,3,4]
       console.log(ar.length=0)


 // array methods
   // 1. pop // returns the removed value
 console.log(arr_2.pop())
 console.log(arr_2)
  // 2. push 
  // push() returns the new length of the array.
  console.log(arr.push(7))
  console.log(arr)
  // 3. unshift
 console.log(arr.unshift(22)) // add element at start of an array
 console.log(arr)
 // 4. shift
 console.log(arr.shift()) // remove first element of an array
 console.log(arr)
       // 5. splice()
//  is one of the most powerful array methods because it can:
//  Add elements
//  Remove elements
//  Replace elements
 // Syntax
  // arr.splice( startIndex(from where to start op) , deleteCount(how many elem to delete) , item1,item2...(items adding(optional))

  let splice_arr=[1,2,3,4,5]  // removing elems using splice
  console.log(splice_arr.splice(1,2))//[2,3] removed is returned
  // notice that splice changed the original array 
  console.log(splice_arr)// [1,4,5]

  // as splice can also add elems so 

  console.log(splice_arr.splice(1,0,"apple")) // returns [] because splice return the removed elem
  // if you want to see array , print the original array
  console.log(splice_arr) // [1,"apple",4,5]

  // imp : when deleteCount is missing it deletes everything from the start u give

        // 6. slice() 
        // syntax :  slice(start,end(optional+exlcuded))
        // is an array method used to copy a portion of an array and return it as a new array.

//      The most important thing to remember:
            // slice() does not change the original array.
           
     // In slice ()you performed operations on the copy of the original array not on the original array itself


     let s_arr = ["a","b","c","d"]
      console.log(s_arr.slice(0,2)) // ["a","b"]
      // but the original array is unchanged

      console.log(s_arr) // ["a","b","c","d"]

  // important to know
            // use concate for merging two arrays
  let ftbl_list1 = ["ronaldo","messi","neymar"];
  let ftbl_list2= ["beckham","zidane","inzaghi"];

  let full_list = ftbl_list1.concat(ftbl_list2);
  console.log(full_list);
   // or you can use spread operator
//    spread operator
   console.log(...ftbl_list1,...ftbl_list2); // it returns all elems but not in an array

   // Array.from() , Array.of () both are used to convert something into array

   let str_1= "hello world"
   let array_two = ["a","b","c","d"]

   console.log(Array.from(str_1)) // convert each letter into an array element 
   console.log(Array.of(str_1)) // convert the given into one element of an array
   
   // indexOf() --> return the inserted element index
   //  lastindexof() --> same as above but start from end 
   //  includes() ---> check whether element is present or not (returns true or false)

