class user {
    constructor(username , email , city){
        this.username = username;
        this.email = email;
        this.city = city;
    }

    changeUsernameCase(){ 
        console.log(`chnageUserCase : ${this.username.toUpperCase()}`);
    }
    
    changeEmailCase(){
        console.log(`chnageEmailCase : ${this.email.toLowerCase()}`);
    }
}

const hitesh = new user('hitesh' , 'hitesh@google.como' , 'karachi');
console.log(hitesh);
console.log(hitesh.changeUsernameCase());
console.log(hitesh.changeEmailCase());


// behined the seeen 

function User (username , email , city){
    this.username = username;
    this.email = email;
    this.city = city;
    this.changeUsernameCase = function(){ 
        console.log(`chnageUserCase : ${this.username.toUpperCase()}`);
    }
    
    this.changeEmailCase = function(){
        console.log(`chnageEmailCase : ${this.email.toLowerCase()}`);
    }
}

const Goobi = new User('Goobi' , 'Goobi@google.com' , 'AzadKashmir');

console.log(Goobi);
console.log(Goobi.changeUsernameCase());
console.log(Goobi.changeEmailCase());