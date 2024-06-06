// Funtion witOut ParaMeters
function name() {
    console.log('i am in function');
}

// name()
let myFunc = ( ) =>{
    console.log("i am in Arrow function");
}

// myFunc()

// Function with Parameters
function add(num1 , num2) {
    let twoNumberAdd = num1 + num2
    console.log(twoNumberAdd);
}

// add(10 , 20)

// Return Function
let newFunc = (userName) =>{
    let result = userName;
    return result;
}
let newFunc2 = (userName , city) =>{
    if(userName === undefined){
        console.log('Please enter your username!');
    }else if(city === undefined){
        console.log('Please enter your city!');
    }else{

        return  userName + ' ' + city;
    }
}


let myFuncCall = newFunc2('Sunny' , 'Lahore')
// console.log(myFuncCall);




// My Pratcice Set Again ............

// Simple function
function sayMyName(){
    console.log('My');
    console.log('is');
    console.log('Zeeshan');
}

// sayMyName()

// Function with Parameters

function add(num1 , num2) {
    let twoNumberAdd = num1 + num2
    console.log(twoNumberAdd);
}

// add(10 , 20)

// Return Function  
function myReturnUser(){
    return 'Mahbub';
}

// myReturnUser()
// let resultUser  = myReturnUser()
// console.log(resultUser);

function addTwoNumbers(num1 , num2){
    return num1 + num2;
}

// console.log(addTwoNumbers(10 , 20));


function userData(userName = "Moin Ali"){
    // if(userName === undefined){
    //     console.log('Please enter your username!');
    //     return
    // }
    if(!userName){
        console.log('Please enter your username!');
        return
    }
    return `${userName} just loggedIn`
}

console.log(userData());

// let userName = 'Mahbub';

// console.log(typeof !userName);