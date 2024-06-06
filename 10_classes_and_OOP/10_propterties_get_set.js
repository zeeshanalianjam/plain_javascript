class user {
    constructor(username, email, city) {
        this.username = username;
        this.email = email;
        this.city = city;
    }

    get username(){
        return this._username.toUpperCase();
    }

    set username(value){
        this._username = value;
    }

    set email(value){
        this._email = value
    }

    get email(){
        return this._email.toLowerCase();
    }
}

const user1 = new user('Ali', 'Ali@gmail.com', 'Karachi');

console.log(user1.username);
console.log(user1.email);