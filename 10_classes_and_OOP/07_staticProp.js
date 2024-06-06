class user {
    constructor(username , city){
        this.username = username;
        this.city = city;
    }

    logMe(){
        console.log(`${this.username} Just loggedIn!`);
    }

    static warningMsg(username){
        console.log(`${username} is not active!`);
    }
}

const user1 = new user('Ali' , 'Karachi');

console.log(user1);

user1.logMe();

user.warningMsg(user1.username);



class employee extends user{
    constructor(username, city , email){
        super(username ,city)
        this.email = email
    }
}


const employee1 = new employee('horrry' , 'lahore' , 'Ali@gmail.com');

console.log(employee1);

employee1.logMe();

employee.warningMsg(employee1.username);
