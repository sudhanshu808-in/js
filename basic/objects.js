const Jsuser={
name : "shubham",
"full name": "shubham karprowan",
age : 21,
location : "dehradun",
email : "shudhanshukaprowan@gmail.com",
isLoggedin : true,
lastloginDays : ["Monday","Tuesday"]
}
console.log(typeof Jsuser["age"]);
Jsuser.email="shubhamkaprowan@gmail.com"
console.log(Jsuser.email)
Object.freeze(Jsuser)
Jsuser.email="asdaisdbiasbdasbdcasb"
console.log(Jsuser.email);
Jsuser.greeting1= function(){
    console.log("this is first greeting of the day");
}
Jsuser.greeting2=function(){
    console.log(`This is the named greeting to ${this["full name"]}`);
}
console.log(Jsuser.greeting1());
console.log(Jsuser.greeting2());

//nesting  :  

const user={
    fullname : {
        userfullname : {
            firstname : "shubham",
            lastname : "kaprowan",
        }
    }
}
console.log(user.fullname.userfullname.firstname);
//another way to initialize objects
const sk={}
sk.name="shubham"
sk.age=21
sk.status="Sleep"
console.log(sk);

//conactning obects : =>
const newObj={...Jsuser,...sk}
console.log(newObj);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmdfasdfasdfasail.com"
    },
    {
        id: 1,
        email: "h@gmadfil.com"
    },
]

console.log(users[0].email);

const accessing={
   course :  "Btech",
   duration : "4 years",
   Instructor : "shubham"
}
// DESTRUCTURINGGGGGG of objects {}<--- this means destructuring is happening
const {Instructor : ok}=accessing
console.log(ok);


// JSON

// {
//     "name" :  "shubham",
//     "class" : "undefined",
// }