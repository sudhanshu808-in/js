console.log(2==1);
console.log("2">"4");
console.log("2"===2);

const addingTwoNumber = (marks) => {
    let gradingSystem = '';
    if(marks>=75){
         gradingSystem = "d"
    }
    else if(marks>= 60 && marks <=70){
        gradingSystem="first"
    }
    else if(marks>45  && marks <60){
        gradingSystem="second"
    }
    else if(marks>= 33 && marks <=45){
        gradingSystem="third"
    }
    else {
        gradingSystem="failed"
    }
    return gradingSystem;
}


addingTwoNumber(65)