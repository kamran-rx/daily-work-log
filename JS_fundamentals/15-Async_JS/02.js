// example 
// Question: resolve when the number is greater than 10
// otherwise reject it and print sorry ,  error occurred 


// This is promise creation
let p_one = new Promise(function(res,rej){
    let n= Math.floor(Math.random()*20)
            if (n>10){
               return res("number is greater than 10")
            }
            else{
                 rej("sorry, error occured")
            }
})
// This is promise consumption

  p_one.then(function(data){
           console.log(data) // this is connected with resolve , means it accept resolve 
  }).catch(function(error){
     console.log(error)     // this is connected with reject
  })

  // Now async await
  // why we use:
  // when we want to use async function we will use promise right, now to recieve value of
  // resolve we use then as we did above ,Now if you do not want to use "then" , you can
  // use async await 
  // remember async keyword  is used before function 

  let p_two = new Promise(function(res,rej){
               return res("this is promise 2")
  })
  async function get_res (data){
            let result = await data
            console.log(result)
  }
 
  get_res(p_two)

  