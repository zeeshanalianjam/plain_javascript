// const tinder = new Object()

const tinder = {}
tinder.email = 'z@gmail.com';
tinder.isLoggedIn = true;

// console.log(tinder);

const userData = {
    name: 'Faizan',
    age: 20,
    email: 'z@gmail.com',
    isLoggedIn: true,
    fullName : {
        userFullName : {
            fN : "Ali Khan",
        }
    }
}

// console.log(userData.fullName.userFullName.fN);

let myObj1 = {
    1 : 'a',
    2 :  'b'
}

let myObj2 = {
    3 : 'c',
    4 : 'd',
}



// let obj =  Object.assign({} , myObj1 , myObj2)
let obj =  {...myObj1 , ...myObj2} 

// console.log({...myObj1 , ...myObj2});
// console.log(obj);

// console.log(myObj1.hasOwnProperty(1));
console.log(Object.keys(myObj1));
console.log(Object.values(myObj1));
console.log(Object.entries(myObj1));




