// singelton
// object.create .... ye custructor me use huta ha


// object literals
// let mySym = Symbol('CoolDown')

// let obj = {
//     name : "zeeshan",
//     "full name" : "Zeeshan Ali Anjam",
//     age : 20,
//     isActive : true,
//     employeeData : function(){
//         console.log(`my name is ${this["full name"]} and this company is best!`);
//     },
//     [mySym] : 'isOk'

// }

// console.log(obj.name);
// console.log(obj['name']);
// console.log(obj['full name']);
// console.log(obj.employeeData());

// let EmployeeObject = {}

// EmployeeObject.empId = 1001;
// EmployeeObject.empRole = "Programmer";
// EmployeeObject.empSalary = 450000;
// // Object.freeze(EmployeeObject)
// EmployeeObject.empAge = 20;
// EmployeeObject.empDepartmentDetails = function () {
//     console.log(`Name is Faizan, Id ${this.empId}`);
// };

// console.log(EmployeeObject.empDepartmentDetails());



// ----------------------------------------------------------------------------
// Again Practice

// Two Types of Ojbects

// (1) Singleton ---> (constructor ki madad se jab ham object create karty han)
// Object.create


// (2) Object literals

let mySym = Symbol("Key")

let StudentDetails = {
    Name : "Hammad",
    "Full Name" : "Hammad Akhtar",
    fName : "Hanif",
    age : 16,
    [mySym] : 'Leader'
}

// console.log(StudentDetails);
StudentDetails.email = "hammadAkhter1002@gmail.com";
// Object.freeze(StudentDetails);
StudentDetails.greeting = function (){
    console.log(`Good Morning Mr. ${this["Full Name"]}`);
}

// console.log(StudentDetails.greeting());
// Access way to the Object key , vlaue
// console.log(StudentDetails.name);
// console.log(StudentDetails["Full Name"]);
// console.log(StudentDetails["Name"]);
// console.log(typeof  StudentDetails[mySym]);
console.log(StudentDetails);
