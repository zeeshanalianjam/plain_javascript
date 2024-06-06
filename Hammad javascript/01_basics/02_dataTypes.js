// Primitive DataTypes (Call by value);
// 7 Types ...
/*
1. String ---> (String ko hm ('') single qoutos ya (" ") double quotation)
2. Boolean ---> (boolean true / false is two types me huta ha)
3. Number ---> (number only number or integar mean '34' , isko ap decimal me bhi likh sakty han)
4. Undefiend ---> (koi bhi variables agar only declare hu aur value assign na hu tu output me 'undefined' aye ga)
5. Bigint ---> (ye bhi aik number ha but isme barra number aata ha jis ken end me 'n' lazmi huta ha)
6. Null ---> (null aik empty object ha iski value empty huti ha 'zero' ni huti)
7. Symbol() ---> (symbol ko ham backEnd me use karty han aur is me ham 'string' , 'number' aur 'undefined' ka use karty han)
*/



// let myStr = "Pakistan";

// if(myStr.includes('Pakistan')){
//     console.log('yes value are included');
// }else{
    
//     console.log('oops no value are not included');
// }
// console.log(myStr.includes('Pakistan'));


// const myBol = false;
// const number = 34;
let myUndef;
let bigIntNum = 323432243234323423n;
let muNull = null;

// console.table([myUndef , bigIntNum , muNull]);

// console.log(myUndef , bigIntNum , muNull);












// Reference/Non Primitive DataTypes (Reference);
// 3 Types ...
/*
1. Function
2. Arrays
3. Objects 
*/

function hammad(){
    // body
    console.log("hello hammad you're in a fucntion ");
}

// inital call
// hammad()

let myArr = [34 , true , 'string' , null , function name(){

}]

// console.log(myArr);


const myObj = {
    name : 'hammad',
    age : 16,
    isAtive : true
}

    console.table([myObj]);



