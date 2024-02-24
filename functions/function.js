function apple(){
    console.log("apple");
}
apple()
function verified(username){
   if(username===null){
    console.log(` has not  been verified ............`);
   }
   else{
    console.log(`${username} has been verified ............`);
   }
}
// const h =verified("Shubham")
verified(undefined)
// console.log(h);


function name(n="Shubham"){
    if(!n){
        console.log(`${n} is here`);
    }
    console.log(`${n} is here`);
}
name()

function calculateCartprice(...num1){
return num1;
}
console.log(calculateCartprice(300,400,34,234,2345,45422,44));

//PASSING OBJECTS :::
const obj={
  username : "shubham",
  course : "Btech cse",
}
function objectss(anyobject){
 console.log(`${anyobject.username} is enrolled in ${anyobject.course}`);
}
objectss(obj)
objectss({username: "Sudhanshu",course : "Civil"})

// ARRAYS 

function arrayss(arr){
    for(let i=0;i<arr.length ; i++){
     console.log(arr[i]);
    }
    }
    const arr=[100,200,300,400,500]
    arrayss(arr)