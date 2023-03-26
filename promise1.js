async function dadMakeingPromise(){
    const dadspromise =  awaite new Promise((resolve,reject)=>{
        new setTimeout(()=>{
          let salary1 =true;
          let salary =100000
          let  play3=30000
          let play4=40000
          if(salary1===true&&salary>play4){
            resolve("buy play station 4")
          }
          else if(salary1===true&&salary>play3){
            resolve("buy play station 3")
          }
          else{
            reject("sry")
          }
    
        },1000)
    })
    console.log(dadspromise)
}


//   const dadspromise =  awaite new Promise((resolve,reject)=>{
//     new setTimeout(()=>{
//       let salary1 =true;
//       let salary =100000
//       let  play3=30000
//       let play4=40000
//       if(salary1===true&&salary>play4){
//         console.log("buy play station 4")
//       }
//       else if(salary1===true&&salary>play3){
//         console.log("buy play station 3")
//       }
//       else{
//         console.log("sry")
//       }

//     },1000)
// })
console.log(dadspromise)