# Zeeshan today work ---> 30/5/024 (advance topics)

## follow us series (js ---> chai aur code)

## video no 41 to 43 Done 

## video 41 ---> Fetch in js

## fetch : practice code :

```javascript
console.log("No Practice Code only Theory video")
```
## video 42 ---> OOP but discussion on object and function with constructor function 

## object and constructor function : practice code :

```javascript
const user = {
    userName : 'Hitesh',
    isLoggedIn : true,
    countLogIn : 10,
    getUserDetails : function(){
        console.log(`userName : ${this.userName}`);
    }
}

// console.log(user.getUserDetails());

function userData(userName , countLogIn , isLoggedIn){
    this.userName = userName;
    this.countLogIn = countLogIn;
    this.isLoggedIn = isLoggedIn;
    this.getUserDetails = function(){
        console.log(`userName : ${this.userName}`);
    }

    return this

}

const user1 = new userData('Ali' , 10 , true);
const user2 = new userData('Gull Bahar' , 15 , false);
// console.log(user1.getUserDetails());
console.log(user1 instanceof userData);
console.log(user1 instanceof Object);
```


## video 43 ---> Magic of protoType  : in this vido i'm not 100% cover but normal situation is code handeld .... i'm learn in this video function and fucntion with behvaior work on object how to add method in function with the help of prototype .

## practice code : 

```javascript
function num(num){
    return num*5;
}

num.power = 2;
let newNum = num(5);
// console.log(newNum);
// console.log(num.power);
// console.log(num.prototype);


function user(username , userCountofLogIn , isAtive){
    this.username = username;
    this.userCountofLogIn = userCountofLogIn;
    this.isAtive = isAtive;
}

const user1 = new user('Ali' , 20 , true);
// console.log(user1);

function createUser(userName , score){
    this.username = userName;
    this.score = score;
}

createUser.prototype.increment = function(value){
    console.log(`  price:  ${this.score++} value : ${value}`);   
}

const chai = new createUser('chai' , 50);
const tea = new createUser('tea' , 300);

console.log(chai , tea);
chai.increment('Good Milk')
tea.increment('MilkShade')

```

## video 43 : The other way i'm learn prototype to an Gloabl Object to add method with the help of prototype and how to Gloably add Method in Array , String etc.

## Practice Code :

```javascript
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

```

