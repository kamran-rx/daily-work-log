
// suppose we have a constructor function that has properties and a method
function BankAcc (AccountHolder,balance=0){
           this.AccountHolder=AccountHolder
           this.balance=balance
        //    this.deposit = function deposit(amount){
        //       this.balance+=amount
        //    }
}
BankAcc.prototype.deposit = function deposit(amount){
              this.balance+=amount
           }
let u1 = new BankAcc("A",200)
u1.deposit(200)
let u2 = new BankAcc("B",600)
u2.deposit(400)
console.log(u1);
console.log(u2);

// inoder to make the code memory efficient we put the method (as it is used in both the same way)
// in prototype so it can be accessed by all the objects


// In ES6 Class has been introduced , which is just a syntactic sugar
// behind the scene constructor function works as shown above
// but the good part is that it methods are already in prototype , we donot need
// to add them manually

class student {
            constructor ( name , age){
                 this.name =name;
                 this.age = age;
            }
        pass(){
                 console.log("you passed the exam");
                 
            }
}

let s1 = new student("abcde",33)
console.log(s1)
console.log(s1.pass());
