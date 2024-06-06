// Simple Loops --------------------
// for (let index = 1; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }


// Nesting Looops -------------------
// for (let i = 1; i <= 10; i++) {
//     console.log('outer --> ', i);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`inner ---> ${j} and outer ---> ${i}`);
//     }
    
// }

//  Nesting Loops making Tables --------------------
// for (let i = 1; i <= 10; i++) {
//     console.log('outer --> ', i);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j} `);
//     }
    
// }



// Loop with Array and use break statment------------------------------
// const myArray = ['Ali' , 'Gull' , 'Honey'];
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     if(index == 2){
//         console.log( myArray[2] , " Not Allowed");
//         break;
//     }
//     console.log(element);
// }



// Break and continue statment -----------------------------
// for (let index = 0; index <= 10; index++) {
//     if(index === 5){
//         // console.log(index); (5 can be used as a printing line or as a number)
//         console.log('5 is best');
//         break;
//     }
//     console.log(index);
    
// }


for (let index = 1; index <= 10; index++) {
    if(index === 5){
        console.log('5 is best');
        continue;
    }
    console.log(index);
    
}



