// (this) key words
//  ---> current context kisi bhi object ke andar aik function hu ya koi block statment hu wahan se this object ka refer current context huga

const myCurrentObj = {
    userName : "Zeeshan",
    city : "Lahore",
    welcomeMessage : function(){
        console.log(this.userName);
    }

}

// myCurrentObj.welcomeMessage();
// console.log(this);

// console.log(this.userName);

// Regular Function
const userName = "Lion"
function chai(userName){
    this.userName = userName
    console.log(this.userName); //this key words yahan se Global scope leta ha
}

// chai();

// Arrow Function
const myFunc1 = (userName)=>{
    console.log(this);
userName = 'GPS';
    return `${this.userName} , welcome in arrow function`
}

// console.log(myFunc1());


function addTwo(num1 , num2){ // implisty ---> function me ham jab bhi curly Braces ke andar return karen gy usko implity kehty han
    return num1 + num2;
}

// console.log(addTwo(4 , 7));


const addThree = (num1 , num2 , num3) =>  (num1 + num2 + num3); // emplisty ---> without curly braces ke direct return karen gy aur yahan py code one line me aa jata ha so (return) ko bhi hatta dena ha


console.log(addThree(4 , 7 , 9));


// 






