console.log(2==1);
console.log("2">"4");
console.log("2"===2);

const addingTwoNumber = (marks) => {
    let grade = '';
    if(marks>=75){
         grade = "d"
    }
    else if(marks>= 60 && marks <=70){
        grade="first"
    }
    else if(marks>45  && marks <60){
        grade="second"
    }
    else if(marks>= 33 && marks <=45){
        grade="third"
    }
    else {
        grade="failed"
    }
    return grade;
}
addingTwoNumber(65)