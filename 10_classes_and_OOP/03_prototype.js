const myName = 'Zeeshan     ';
// console.log(myName.trueLength);


const myValue = [1 , 2 , 3];


const Student = {
    name : 'Ali',
    age : 30,
    city : 'Lahore',
    studentDetails : function(){
        console.log(`Student name is ${this.name}`);
    }
}


Object.prototype.Shazad = function(){
    console.log(`Shazad is Here`);
}

Student.Shazad(); // Value acces in Object 
myValue.Shazad(); // value access arrays
myName.Shazad(); // value access string

Array.prototype.weather = function(){
    console.log('Weather is hot');
}

myValue.weather()
// Student.weather()



// inheritance

const Teacher = {
    makeVideo : true,
    courseFee : '10$',
}

const faculty = {
    teacherFood : true,
}

const studentEvent = {
    sports : 'cricket',
    __proto__ : faculty
}

Teacher.__proto__ = studentEvent

console.log(Teacher.sports);
console.log(studentEvent.teacherFood);


const anotherUserName = 'Verdana     ';
console.log(anotherUserName.length)

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The true length ${this.trim().length}`);
}

anotherUserName.trueLength();
