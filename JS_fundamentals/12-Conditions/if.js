// conditions

let marks = 92 ;

if ( marks > 40 && marks < 60) {
              console.log( `your grade is B`)
}
if ( marks >60 && marks <80) {
      console.log(`your grade is A`)
}
if(marks >80 && marks <= 100){
         console.log(`your grade is A+`)
}

// if else

    let count = 2 ;
     
    if(count == 2){
         console.log("code executed")
    }
    else{
                 console.log("code is not executed")
    }

    // a mini- project 

    let balance = 5000;
    let withdraw = 3000;

if (withdraw <= balance) {
    balance  -= withdraw;
    console.log("Withdrawal Successful");
    console.log(`Remaining Balance : ${balance} `);
} else {
    console.log(" Insufficient Balance ");
}