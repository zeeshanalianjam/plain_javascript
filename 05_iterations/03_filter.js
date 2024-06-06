const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter((num) => num > 5)
// console.log(newNum);

// foreach using with array : is me new array ke andar value ju num ke andar aa rahi usko newNum empty array me push kiya ja raha 
// const newNum = [];
// myNum.forEach((num) => {
//     if(num > 4){
//         // console.log(num);
//         newNum.push(num)
//     }
// })

// console.log(newNum);

  
const programmingLanguage =  [
    {
      "programming language": "javascript",
      "author Name": "ECMAScript",
      "year": 1995

    },
    {
        "programming language": "python",
        "author Name": "Guido",
        "year": 1991
    },
    {
        "programming language": "java",
        "author Name": "ECMAScript",
        "year": 1995
    },
    {
        "programming language": "c++",
        "author Name": "ECMAScript",
        "year": 1995
    }

]

const newProgramming = programmingLanguage.filter((code) => code["author Name"] === "Guido");
console.log(newProgramming);

// const newProgramming = [];

// programmingLanguage.forEach((code) => {
//     if(code["author Name"] === "Guido"){
//         newProgramming.push(code)
//     }
// })
// console.log(newProgramming);

// for (let index = 0; index < programmingLanguage.length; index++) {
//     const element = programmingLanguage[index];
//     if(element["author Name"] === "Guido"){
//         newProgramming.push(element)
//     }
//     // console.log(element);
    
// }

// console.log(newProgramming);





