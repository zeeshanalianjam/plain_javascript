function addValue(...num1){ // rest Operator (...num1)
    return num1;
}

// console.log(addValue(10 , 200 , 300 , 400));

let Employee = {
    name : "Mahbub",
    age : 30,
    salary : 10000 
}

function addEmployee(employeeDetails){
    console.log(employeeDetails);
}

// addEmployee(Employee);

let myCollection = [12 , 232, 234];

function addMyCol(myCol){
    // console.log(myCol[0]);
}

// addMyCol(myCollection);



let objectFunction = (marks = {
    English : 34,
    Math : 20,
    English : 80
})=>{
    return marks.English;
}

// console.log(objectFunction());

let ArraysFunction = (score = [12 , 14 , 16]) =>{
    return score[0];
}
console.log(ArraysFunction())

