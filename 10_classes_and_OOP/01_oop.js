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