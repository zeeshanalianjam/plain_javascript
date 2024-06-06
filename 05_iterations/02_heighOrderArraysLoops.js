// iteration Process of Arrays , String , Maps , Object , Arrays in Object 


// for of Loops -----------------------------------------
const heroos = ['spiderMan' , 'flash' , 'ajay']

// for (let index = 0; index < heroos.length; index++) {
//     const element = heroos[index];
//     console.log(element);
// }

for (const i of heroos) {
    // console.log(i);
}

const myName = "Zeeshan Ali";

// for (const [Ownername] of myName) {
//     if(Ownername == ' '){
//         break;
//     }
//     console.log( Ownername);

// }


// const map = new Map();

// map.set('userName' , "levon");
// map.set( "userId" , 1002);

// // console.log( map);

// for (const [key , value] of map) {
//     console.log(key , '-->' , value);
// }



const employeeData = {
    empId : 1002,
    empName : "levon",
    empSalary : 100000
}

for (const [key , value] of Object.entries(employeeData)) {
    // console.log(key , '-->' , value);
    // console.log(key);
}



const arrInObj = [
    {
        name : "zeeshan",
        age : 20    
    },
    {
        name : "levon",
        age : 30    
    }, 
    {
        name : "ajay",
        age : 40    
    }
]

// for (const [index , value] of arrInObj.entries()) {
//     console.log(index , '-->' , value);
//     console.log(index);
// }






// for in Looops ----------------------------
// const user = {
//     name : "zeeshan",
//     age : 20

// }

// for (const key in user) {
//     console.log(key , user[key]);
// }

const myArr = [1 , 2 , 3 , 4 ,5];

for(const i in myArr){
    // console.log(i , myArr[i]);
}


const myStr = "My String";

for(const i in myStr){
    if(myStr[i] == ' '){
        break;
    }
    // console.log(i , myStr[i]);
}


// const myMap = new Map()

// myMap.set('1' , "levon");
// myMap.set('2' , "cool");
// console.log(myMap);

// for(const i in myMap){
//     console.log(i);
// }



// forEach Loops -----------------------------------------------
const myHeroos = ['spiderMan' , 'flash' , 'marvish'];

myHeroos.forEach((heroos , index , arr)=>{
    // console.log(heroos , index , arr);

})



const programming = [
    {
        Language : 'javascript',
        Framework : 'React',
    },
    {
        Language : 'python',
        Framework : 'Django',
    },
    {
        Language : 'java',
        Framework : 'Spring',
    },
    {
        Language : 'c',
        Framework : 'c++',
    },
    {
        Language : 'php',
        Framework : 'Laravel',
    },
    {
        Language : 'ruby',
        Framework : 'Ruby on Rails',
    },
    {
        Language : 'c#',
        Framework : 'ASP.NET',
    }

]

programming.forEach((value,index,arr)=>{
    // console.log(value , index , arr);
})






function greet(name) {
    // console.log(name);
    return function(message) {
        console.log(message + ', ' + name + '!');
    };

}

// const greetAli = greet('Ali');
// greetAli('Good Morning'); // Output: Good Morning, Ali!

// console.log();




const users = [
    { name: 'Ali', age: 25 },
    { name: 'Sara', age: 30 },
    { name: 'Ahmed', age: 20 },
    { name: 'Fatima', age: 35 }
];

const above30 = users.filter((user) => {
    return user.age > 30;
});

console.log(above30); // Output: [{ name: 'Sara', age: 30 }, { name: 'Fatima', age: 35 }]



