// Dates In Js
//              Date is an Object in JS
 const curr_date = new Date(); // Gives current date
 console.log(curr_date);

 const str_date = curr_date; // 7/29/2026, 12:02:12 PM
 console.log(str_date.toLocaleString())

 console.log(str_date.toLocaleDateString()) // 7/29/2026

 console.log(curr_date.toISOString()) // 2026-07-29T12:03:57.300Z

// You can put date in YY/MM/DD format also

let d = new Date("2026-02-20")
console.log(d) // 2026-02-20T00:00:00.000Z
console.log(d.toDateString()) // Fri Feb 20 2026

            // date.now()---> timestamp
    
  let mytime= Date.now(); // gives milliseconds from jan 1970 to current time.
  console.log(mytime) // 1785327386570 (this changes )



