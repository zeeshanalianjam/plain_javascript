// Constructor Function  and this
function setUser(userName , email, city){
    this.userName = userName;
    this.email = email;
    this.city = city;

}

function createUser(userName , age , role){
    setUser.call(this, userName)
    this.age = age;
    this.role = role;
}

const createUserObj = new createUser('suneel' , 30 , 'programmer');
console.log(createUserObj);
