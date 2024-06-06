const number = [1 , 2 , 3];

// const newNums = number.reduce((accomulator , currentValue) => accomulator + currentValue , 0);
// const newNums = number.reduce((accomulator , currentValue) => {
//     console.log(`accomulator : ${accomulator} and currentValue : ${currentValue}`);
//     return  accomulator + currentValue 
//     }, 3);


// const newNums = number.reduce((acc , curr) => acc + curr , 0);
// console.log(newNums);


const shoppingCart = [
    {
        name : 'Milk',
        price : 10,
        quantity : 2
    },
    {
        name : 'Bread',
        price : 20,
        quantity : 1
    },
    {
        name : 'Butter',
        price : 30,
        quantity : 1
    }
]

const totalPrice = shoppingCart.reduce((acc , curr) => acc + (curr.price * curr.quantity) , 0);
console.log(totalPrice);