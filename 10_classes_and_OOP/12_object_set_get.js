const myObj ={
    _userName : 'Hammad',
    _email : 'hammadChai@gmail.com',

    get userName(){
        return this._userName.toUpperCase();
    },
    get email(){
        return this._email;
    },
    set userName(value){
        this._userName = value;
    },
    set email(value){
        this._email = value;
    }
}

console.log(myObj.userName);