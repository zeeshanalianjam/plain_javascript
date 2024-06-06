function BankAccount(costomerName, balance = 0) {
    this.costomerName = costomerName;
    this.accountNumber =  Math.round(Math.random(Date.now()) *  90351129339187 + 1);
    this.balance = parseInt(balance);

    this.deposit = function (amount) {
        this.balance += amount;
    }
    this.withdraw = (amount)=>{
        this.balance = parseInt(this.balance - amount);
    }

}

// const ali = new BankAccount('Ali', 1000);
// const gull = new BankAccount('Gull K');
// ali.deposit(5000)
// ali.withdraw(1000)
// gull.deposit(10000)
// console.log(ali);
// console.log(gull);


// ------------------------------------------------------------
const submitForm = document.querySelector('#submitForm');
let customerName = document.querySelector('#customerName');
let initialBalance = document.querySelector('#initialBalance');

const Accounts = [];
submitForm.addEventListener('submit' , (e)=>{
    e.preventDefault()
    let customerNameValue = customerName.value;
    let initialBalanceValue = initialBalance.value
    const account =  new BankAccount(customerNameValue , initialBalanceValue);
    Accounts.push(account);
    console.log(Accounts);
} , false)


