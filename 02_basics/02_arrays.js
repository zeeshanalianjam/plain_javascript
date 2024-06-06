let arr = [12 , 13 , 14 , 15 , 16];
let arr2 = ['Man' , 'Boy' , "Child"];
// arr.push(arr2);
arr.push(...arr2.join());
console.log(arr);

let myNewArr =  arr.concat(arr2);
// console.log(myNewArr);
// console.log(Array.isArray('zee'));
// console.log(Array.from('zee'));
// console.log(Array.from({
//     userName : "spider",
//     password : null
// }));
// console.log(Array.of({
//     userName : "spider",
//     password : null
// }));

let a = 100;
let b = 200;
let c = 300;
// console.log(Array.of(a , b , c));

let cityName = ['Tank' , 'Dikhan' , 'Islamabad' , ['Quetta' , 'Nowshera']];
console.log(Array.of(cityName));

// console.log(Array.from(""));