//  Object in Js
let user = {
              name :"abc",
              age : 22 ,
              hobby : "playing video games"

}
console.log(user.name)

//  or it can be nested object

let nestedobj = {
               name : "def",
               age : 34,
               contact_info :
                {
                      mobile_no: 34523223,
                      landline :234234 ,
               }
}
console.log(nestedobj.contact_info.mobile_no)

// you can update a property or add a property

nestedobj.contact_info.mobile_no = 11111; // updating a key value
console.log(nestedobj.contact_info)

// adding a property

nestedobj.school ="xyz";
console.log(nestedobj)

//  deleting a property

delete nestedobj.school;
console.log(nestedobj)

// Object.assign()
// this is used to put multiple objects inside a target object

let obj1 = {
                a:1,
                b:2,
                c:3
}
let obj2 = {
               d:4,
               e:5,
               f:6
}

 let obj3 = Object.assign( obj1, obj2)
console.log(obj3)
// // or use this syntax
 let obj3 = Object.assign({}, obj1,obj2)// same anwer as above
//  // or you can use spread operator
//  // this is most common + easy approach

 let obj3 = {...obj1 , ...obj2}
 console.log(obj3);

 //  a little bit of "this" keyword

 let test = {
               name : "raza",
               age :33,
               school: "xyz",
            sum : function (){
                   return `school is , ${this.school}`
            }
 }
console.log(test.sum())
  
//  "this" keyword is useful and is important to use 
// why ? reason is
let person1 = {
                name:"aaa",
                age:33,
                greet:function(){
                    console.log(`name is ${this.name}`)
                }
}
let person2 = {
                  name :"bbbb",
                  age: 22,
                  greet:person1.greet
}
person1.greet()
person2.greet()

//  destructuring of Objects

// Destructuring → take values out of objects/arrays and put them into variables.

let student1 ={
              name:"sam",
              age:29
}

const { name , age } = student1 // remember that names of the variable must match 
console.log(name)
console.log(age)

// if you want to name it on your own , you can do something like this
const { name:student_name , age: student_age } = student1
console.log(student_name)

// if the variable is not present then  it give undefined , to avoid that you can
// use default values as well , like this
const {education, school="abcdef"} =  student1 // notice that school + education isnt there
console.log(school) // gives abcdef as we gave it default value
console.log(education) // gives undefined


// destructuring of nested object
const user_one = {
  name: "Ali",
  address: {
    city: "Abbottabad",
    country: "Pakistan"
  }
};
const {   address:{city ,country}     } =user_one;

console.log( city)
console.log(country)

// spread operator (...)
// Spread means copy and expand.

let spread = {
                 name: "Ali",
                 age: 25
}

// if i want to put these in the next object i can use spread operator

let spread2 = {
                  ...spread,
                  school:"xyzz"
}
console.log(spread) // 1st object(spread) is not changed 

console.log(spread2) // includes the properties of the 1st obj as well

//  Rest operator (...) 
// Rest collects remaining properties.
const userr = {
  first_name: "Ali",
  age: 25,
  city: "Abbottabad"
};

const { first_name, ...otherDetails } = userr;

console.log(name);
console.log(otherDetails);