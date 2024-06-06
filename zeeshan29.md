# Zeeshan today work ---> 29/5/024 (advance topics)

## follow us series (js ---> chai aur code)

## video no 39 to 40 Done 

## video 39 ---> Api Request with XMLHttpRequest

## Api Request : practice code :

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body style="background-color: rgba(0, 0, 0, 0.801); color: white;">
    <h2>Api Request</h2>
    <form>
        <label for="following">Following : </label>
        <input type="checkbox" name="following" id="following">
    </form>
    <button>Access Data</button>
    <div class="container">
    </div>

    <script>
        const cont = document.querySelector('.container');
        console.log(cont.children[1]);
        const btn = document.querySelector('button');
        const folowingCheck = document.querySelector('input')

        const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
        const xhr = new XMLHttpRequest();
        console.log(xhr.readyState);
        xhr.open('GET', requestUrl);
        xhr.onreadystatechange = () => {
            console.log(xhr.readyState);
            if (xhr.readyState === 4) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                console.log(data.followers);
                console.log(data.avatar_url);
                btn.addEventListener('click', (e) => {

                    if (folowingCheck.checked === true) {
                        cont.innerHTML = ` <h3>${data.following} </h3>`;

                    } else {

                        cont.innerHTML = `<img src="${data.avatar_url}" alt="">
                                            <h3>${data.followers} </h3>`;
                    }

                }, false)


            }

        }
        console.log(xhr.readyState);
        xhr.send()
    </script>
</body>

</html>
```

## Video 40 : Promises in Js

## promises(resolve , reject) : code : 

```javascript
const promisesOne = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log('async task 1 done');
        resolve()
    } , 1000)
})
promisesOne.then(()=>{
    console.log('promisesOne consumed!');
})

new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log('async task 2 done');
        resolve();
    }, 1000)
}).then(()=>{
    console.log('promisesTwo resolved!');
})


const promisesFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({userId : 1002 , userName : 'iCoder'})
    }, 1000);
})

promisesFour.then((user)=>{
    console.log('promisesFour resolved!');
    console.log(user);
})


const promisesThree = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            
            console.log('async task 3 done');
            resolve({userName : 'Saad' , userCity : 'Lahore'});
        }else{
            reject('ERROR : Something went wrong in promise reject 3');
        }
    }, 1000)
})

promisesThree.then((user)=>{
    console.log('promise 3 is resolved!');
    console.log(user);
    return user.userName;
    
}).then((userName)=>{
    console.log(userName);
})
.catch((error)=>{
    console.log(error);
}).finally(()=> console.log('The promise is either resolve or rejcet!'))


const promisesFive = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            
            console.log('async task 5 done');
            resolve({userName : 'JS' , password : '123'});
        }else{
            reject('ERROR : in JS promise reject 5');
        }
    }, 1000)
})

// consumed or resolve promise five with async await function 

async function cosumePromiseFive(){
   try {
       const data = await promisesFive;
       console.log(data);
    
   } catch (error) {
    console.log(error);
   }
}

cosumePromiseFive();



// api request with async

async function requestApi(){
    try {
        const myUrl = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await myUrl.json();
        console.log(data);
        
    } catch (error) {
        console.log("E :" , error);
    }
}

// requestApi()

// api request with .then 
const response = fetch('https://jsonplaceholder.typicode.com/users');
response.then((response)=>{
    console.log(response);
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error)).finally(()=>{
    console.log('The promise api either resolve or reject');
})
```