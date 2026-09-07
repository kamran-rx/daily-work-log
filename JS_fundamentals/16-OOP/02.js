// factory function
// is a function that returns an object

function user (username,age){
                  
     return {
                // object
            username:username,
             age:age
     }
}
let u1 = user("john",22)
console.log(u1)
let u2 = user ("ahmad",44)
console.log(u2)

// but the problem is that there is no prototype by default , you have to make it manually
// so we dont use this approach
// to fix the problem we have " constructor function "
// the 'new' keyword tells us that this is a constructor function
// and this 'new' creates object and returns the object and allocate new memory 

function student(name,age){
            this.s_name = name
            this.s_age = age
}
let s1 = new student("abcdef",33)
console.log(s1)
let s2 = new student ("uzair",25)
console.log(s2);

