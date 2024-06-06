# Zeeshan today work ---> 25/5/024 (half-day)

## follow us series (js ---> chai aur code)

## video no 30 to 34 Done 

## video 30 ---> Filter  , Map and Reduce

## filter : practice code :
```filter
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


```

## Map : practice code :
```
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
```

## Reduce : practice code :
```
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
```


## video 31 to 32 ---> DOM (part - 1)

##  practice code :

```DOM
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
</head>
<body>
    <div class="container">
        <div class="heading" id="title">JavaScript DOM <span style="display: none;"> (Document Object Model) </span></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident est neque ipsa amet blanditiis error! Illum facere beatae provident.</p>
        
        <ul class="myUl">
            <li class="item">One</li>
            <li class="item">Two</li>
            <li class="item">Three</li>
            <li class="item">Four</li>
        </ul>
        <form action="">
            <input type="password" name="" id="" autocomplete="on">
        </form>
        
    </div>
</body>
<script>
    const myUl = document.querySelector('.myUl')
    // let child =  myUl.childNodes[1].className
    // child = myUl.children[0].innerText = "fix"
    // child = myUl.children[0].style.backgroundColor = 'red'
    // console.log(child);

    const myItem = document.querySelectorAll('.item')
    // console.log(myItem[0].nextSibling);
    // console.log(myItem[0].nextElementSibling.nextElementSibling.nextElementSibling.innerText);

    const myLi = document.createElement('li')
    myLi.id = Math.round(Math.random() * 10 + 1)
    myLi.className = 'creaedItem';
    myLi.innerHTML = "Five";
    console.log(myLi);
    myUl.appendChild(myLi)
</script>
</html>
```
## video 33 ---> DOM (part - 2) 

## eidt - remove - replace in dom : practice code :
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul class="language">
        <li class="item">JavaScript</li>
    </ul>
</body>
<script>
    const addLanguage = (language)=>{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(language));
        document.querySelector('.language').appendChild(li);
    }

    addLanguage('Python')
    addLanguage('Java')

    const language = document.createElement('li');
    const addTxtNode = document.createTextNode('Flutter');
    language.appendChild(addTxtNode);
    document.querySelector('.language').appendChild(language);

    // edit
    const editLi = document.createElement('li');
    editLi.appendChild(document.createTextNode('Ruby'));
    document.querySelector('.language').replaceChild(editLi,document.querySelector('li:last-child'));

    // edit - 2
    const firstLang = document.querySelector('li:first-child');
    firstLang.outerHTML = '<li> C## </li>'

    // remove
    document.querySelector('li:last-child').remove();
</script>
</html>
```


