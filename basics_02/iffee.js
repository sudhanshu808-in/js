//IMMEDIATELY INVOKED  FUNCTION  EXPRESSIONS
// main use is that sometomes we dont want our function to get poluted or get affected by global variables that is why we use iife
// syntax->()() 1. defination 2. Execution

(
    function hwllo(){
        console.log("DB connected")
    }//named iffe
)(); // ;  is important to end evoking

((name)=>{//unamed iffe
console.log(`${name} is here`);
})("Shubham")