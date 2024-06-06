class employee {
    constructor(employeeId , employeeName){
        this.employeeId = employeeId;
        this.employeeName = employeeName;

    }

    getEmployeeData(){
        console.log(`employee Id : ${this.employeeId}`);
    }
}

const empData = new employee(1001 , 'Gull Khan');

empData.getEmployeeData();

// console.log(empData.employeeId);

class User extends employee{
    constructor(employeeId, employeeName, userName){
        super(employeeId, employeeName);
        this.userName = userName;
    }
}

const userData = new User(1002 , 'Junaid' , 'Afnan');

userData.getEmployeeData();

console.log(userData.userName);

console.log(userData instanceof employee);

// instanceof check
if (userData instanceof User) {
    console.log("userData is an instance of User");
} else {
    console.log("userData is NOT an instance of User");
}

if (userData instanceof employee) {
    console.log("userData is also an instance of employee");
} else {
    console.log("userData is NOT an instance of employee");
}