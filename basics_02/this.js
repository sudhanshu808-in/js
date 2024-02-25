const user= {
    username : "Shubham",
    price : 999,
    welcome : function(){
        console.log(`${this.username} , welcome to website`);
    }
}
user.welcome()

const user2 = (username)=>{
console.log(`${username} is an authenticated user`);
}
user2("Shubham")
user2("shudhanshu")

// if we are using curly braces we have to use return 
const user3 = (num1,num2)=>{
    return num1+num2  // EXPLICIT RETURN
}
//if we use () then  we dont need to use return statement
const user4=(num1,num2)=>(num1+num2) //IMPLICIT RETURN 


console.log(user3(1,8));
console.log(user4(1,8));
