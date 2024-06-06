/*
JavaScript mein, jab aap kisi object ke property ko define karte hain, toh aap in teeno attributes ka istemal kar sakte hain: writable, enumerable, aur configurable. Ye attributes batate hain ke us property ke saath kya kya operations perform kiye ja sakte hain.

1. writable:---------------------

Agar writable: true set kiya gaya hai, iska matlab hai ke aap us property ki value ko change kar sakte hain.
Agar writable: false set kiya gaya hai, iska matlab hai ke aap us property ki value ko change nahi kar sakte.

2. enumerable:---------------------

Agar enumerable: true set kiya gaya hai, iska matlab hai ke wo property loop (for...in) aur Object.keys() methods mein dikhayi degi.
Agar enumerable: false set kiya gaya hai, toh wo property loops aur Object.keys() methods mein nahi dikhayi degi.

3. configurable:---------------------

Agar configurable: true set kiya gaya hai, iska matlab hai ke aap us property ko delete kar sakte hain aur uske attributes (writable, enumerable, configurable) ko change kar sakte hain.
Agar configurable: false set kiya gaya hai, toh aap us property ko delete nahi kar sakte aur uske attributes ko change nahi kar sakte.

*/






const discriptor =  Object.getOwnPropertyDescriptor(Math , 'PI')

// console.log(discriptor);


const pi = Math.floor(Math.PI)
// console.log(pi);

const user = {
    name : "Zeeshan",
    age : 20,
    city : "Lahore",
    isMsg : function(){
        console.log(`Good Morning Mr . ${this.name}`);
    },
}

const discriptor2 = Object.getOwnPropertyDescriptor(user , 'name')
// console.log(discriptor2);

const set = Object.defineProperty(user , 'name', {
    writable : false,
    enumerable : false,
    configurable : false,
})
user.name = 'CoolDown'
// console.log(user);

for (const [key , value] of Object.entries(user)) {
    
    if(typeof value !== 'function'){
        // console.log(`${key} , ${value}`);
    }
}
const discriptor3 = Object.getOwnPropertyDescriptor(user , 'name')
// console.log(discriptor3);


// ---------------------------------------------------

const myObj = {
    user : 'iCoder-11',
    age : 20,
    city : 'Lahore'
}
console.log(myObj);

const discriptorCheck = Object.getOwnPropertyDescriptor(myObj , 'user');
// console.log(discriptorCheck);

const discriptorCheckWritablePropertyChange = Object.defineProperty(myObj , 'user' , {
    writable : false,
    // enumerable : false,
    // configurable : false,
})

myObj.user = 'zeeshan';
myObj.age = 10;

console.log(myObj);