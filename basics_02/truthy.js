// falsy values ->initial values which are considered false by conditions

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values ->initial values which are considered false by conditions
// "0", 'false', " ", [], {}, function(){}

const obj={}
if(Object.keys(obj).length==0){
    console.log("the object is empty");
}

//NULLISH COALESCING OPERATOR (??) :null defined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

//Ternary operator  condition ? true : false

