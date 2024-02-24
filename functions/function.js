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