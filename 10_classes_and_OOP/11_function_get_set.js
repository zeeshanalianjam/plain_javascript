function employee(empId, empName, empAge) {
    this._empId = empId,
        this._empName = empName,
        this._empAge = empAge,

        Object.defineProperty(this, 'empID', {
            get: function () {
                return this._empId.toString();
            },
            set: function (value) {
                this._empId = value;
            }

        })

    Object.defineProperty(this, "empName", {
        set: function (value) {
            this._empName = value;
        },

        get: function () {
            return this._empName.toUpperCase();
        }
    })

}

const emp1 = new employee(1001, "Majid", 34);

console.log(typeof emp1.empID);
console.log(emp1.empID);
console.log(emp1.empName);

// emp1.empID = 1002;

// console.log(emp1.empID);