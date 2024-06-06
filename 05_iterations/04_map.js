const number = [1 , 2 , 3, 4, 5, 6 , 7 , 8 , 9 , 10];

const newNumber = number.map((num) => num * 10);
console.log(newNumber);

// Chaining --------------------
// const newNums = number
// .map((num) => num * 10)
// .map((num) => num + 1)
// .filter((num) => num >= 40)
// .map((num) => num - 1);
// console.log(newNums);