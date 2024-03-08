// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async is complete");
//         let a= 10000
//         // return a
//         resolve(a);
//     },1000)
// })
// promiseOne.then(function(a){
//     console.log(`TASK COMPLETED WITH ${a}`);
// })



// new Promise((resolve,reject)=>{
//  setTimeout(function(){
//     console.log("task 2  Synced");
//     resolve()
//  },1000)
// }).then(function(){
//    console.log("task 2 completed");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//        resolve({user:"shubham",eduaction:"Btech",cgpa:"9"})
//     },1000)
//    }).then(function(user){
//       console.log(user.cgpa);
//    })


const promise5=  new Promise(function(resolve,reject){
setTimeout(() => {
   let err=true;
   if(!err){
      resolve({username : "Shubham",cgpa:"8.9"})
   }
   else{
      reject("ERROR SOMETHING WENT WRONG")
   }
}, 1000);
})
promise5.then((user)=>{
   console.log(user);
   // resolve(user.username)
   return  user.username
}).then((user)=>{
   console.log(user);
}).catch(()=>{
   console.log("ERROR SOMETHING WENT WRONG");
}).finally(()=>{
   console.log("Processes Completed");
})