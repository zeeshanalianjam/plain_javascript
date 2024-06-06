function BankAccount(userName , balance = 0){
    this.userName = userName;
    this.accountNumber = Math.floor((Math.random() * 2435668542092693 + 1));
    // this.accountNumber = Date.now();
    this.balance = balance;
    
    this.deposit = (amount)=> {
        this.balance = this.balance + amount
    }
    
    
}

// const AliAccount = new BankAccount('Ali');
// const AftabAccount = new BankAccount('Aftab' , 2000);
// console.log(AliAccount);
// AftabAccount.deposit(4000)
// console.log(AftabAccount);


const submitForm = document.querySelector('#submitForm');
let customerName = document.querySelector('#customerName');
let initialBalance = document.querySelector('#initialBalance');

// Deposit query
const depositForm = document.querySelector('#depositForm');
let depositCustomerAccountNumber = document.querySelector('#depositCustomerAccountNumber');
let depositCustomerBalance = document.querySelector('#depositCustomerBalance');


const accountsArray = [];

submitForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    let accountsValue = new BankAccount(customerName.value , +initialBalance.value);
    accountsArray.push(accountsValue)
    console.log(accountsArray); 

})

depositForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    let accountNumber = +depositCustomerAccountNumber.value;
    let depositAmount = +depositCustomerBalance.value;

    // Find the existing account
    let existingAccount = accountsArray.find(account => account.accountNumber === accountNumber);
    if (existingAccount) {
        existingAccount.deposit(depositAmount);
        console.log(`Deposited ${depositAmount} to account number ${accountNumber}`);
    } else {
        console.log('Account not found');
    }
    console.log(accountsArray);
})