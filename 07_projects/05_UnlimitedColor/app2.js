function randomColor (){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor}`;
}

console.log(randomColor());

let intervalId;
function startChangeColor(){
   intervalId = setInterval(function(){
            document.body.style.backgroundColor = randomColor();
        }, 1000);
}
function stopChangeColor(){
    clearInterval(intervalId);
    intervalId = null
}
document.querySelector('#start').addEventListener('click' , startChangeColor);
document.querySelector('#stop').addEventListener('click' , stopChangeColor);