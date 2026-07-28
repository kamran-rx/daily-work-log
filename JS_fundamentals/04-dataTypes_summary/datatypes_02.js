// datatypes summary
//  mainly datatypes is divided into two main categories
// 1. primitive datatypes --> aka call by value
// 2. non-primitive datatypes aka reference datatypes

         // 1. Primitive -->(number , string , boolean , null ,undefined , bigint , symbol)
// primitive datatypes are stored in stack and is call by value means
// that if you copy it from somewhere , you have been given its copy not the memory reference 
// So when you make changes in it, you do changes in the copy , not in the original one 
// for example:-
let student_1 = "ali";

let student_2 = student_1;
student_2 = "ahmad"

console.log(student_2);
console.log(student_1);

// as in the above example i can guess that when i change the value of student_2 
// the student_1 value should be changed as well as we put value of student_1 in student_2 
// but it is not the case here , in js the primitive datatypes is call by value , its 
// value copy is given to you so when you make the changes , u do in the copy not in the original one


// 2.  Non-primitive ( objects , arrays , functions)
// they have given heap memory 
// they are reference datatypes , in this copy is not given to you but its memory reference is given\
// e.g
let user_1 = {
     name : "atif",
     age : 22
}

let user_2 = user_1;

user_2.name = "haris";

console.log(user_2.name);
console.log(user_2.name);

// now if we see in the above example both user name changes , reason is simple that is
// memory reference is given , not the copy 
