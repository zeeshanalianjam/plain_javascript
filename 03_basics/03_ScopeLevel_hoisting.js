function employeeData() {
    const empName = "Majid";
    const empAge = 34;

    function empDataPrint() {
        const empSalary = 45000;
        console.log(empName);
    }
    empDataPrint()
    // console.log(empSalary);

}

// console.log(empAge);
employeeData();


if (true) {
    const userIdOut = 1002;
    const userNameOut = "Ali";
    if(userIdOut === 1002){
        const userId = 1001;
        const userName = "Ghullam Khan";
        console.table([userIdOut , userNameOut]);
    }
    // console.table([userId, userName]);
}

console.log(addOne(10));

function addOne(num){
    return num + 1;
    console.log(num);
}

// let intoVar;

const intoVar = function addTwo(num) {
    return num + 2;
    console.log(num);
    
}

console.log(intoVar(10));

