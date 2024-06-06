let myObj = {
    userName : "Zeeshan",
    Role : "Programmer",
    age : 20
}
console.log(myObj);
// myObj.userName

const {userName : user} = myObj
// console.log(userName);
console.log(user);

// JSON 
// {
//     "employeeId" : 1001,
//     "employeeName" : "Salman",
//     [
//         "employeeId" : 1002,
//         "employeeName" : "Zeeshan",
//         "employeeId" : 1003,
//         "employeeName" : "Salman"
//     ]
// }