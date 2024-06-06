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







