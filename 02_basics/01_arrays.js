let array = [1 , 2 , 3 , 4];
// console.log("Orignal : " ,array);
const myNewArray = new Array(12 , 13 , 14 , 15);
// console.log(myNewArray);

// mehtod of array slice and splice 
// const mySlice = array.slice(1 , 3)
// console.log("Orignal : " ,array);
// console.log(mySlice);


const mySplice = array.splice(1 , 3)
// console.log("Orignal : " ,array);
// console.log(mySplice);

console.log("before push : " ,  myNewArray);
console.log(myNewArray.push(20));
console.log("after push : " ,  myNewArray);
console.log("-----------------------------------------");
console.log("before pop : " ,  myNewArray);
console.log(myNewArray.pop());
console.log("after pop : " ,  myNewArray);
console.log("-----------------------------------------");
console.log("before shift : " ,  myNewArray);
console.log(myNewArray.shift());
console.log("after shift : " ,  myNewArray);
console.log("-----------------------------------------");
console.log("before unshift : " ,  myNewArray);
console.log(myNewArray.unshift(23));
console.log("after unshift : " ,  myNewArray);
// console.log(myNewArray);


