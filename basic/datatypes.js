// alert(3+3)
//premitive data  types
let ans= true
let apple="apple"
let no=12
let state =null
let s=undefined
let k=BigInt
console.log(typeof undefined);//undefined
console.log(typeof null);//object
// const a=87457245692734569237459n //this n -> will make it BigInt
//refrence data types
//ARRAYS , OBJECTS AND FUNCTIONS
const niggas=["Travis","thug","Metroooo....","slime"]
let object={
    name : "shubham",
    roll : 12312,
}
const fun = function(){
    console.log("nigga what up");
}

// <<<<<<<<<<<STACK VS HEAP>>>>>>>>>>>>>
let a="nigga"
let b=a
a="boi what the hell"
console.log(a);
console.log(b);
let obj={
    boi : "apple",

}
let obj2=obj;
obj2.boi="mango"
console.log(obj)
console.log(obj2)

