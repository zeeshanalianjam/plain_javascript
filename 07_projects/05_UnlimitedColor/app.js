function randomColor() {
    let hex = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        hexCode += hex[Math.floor(Math.random() * 16)];
    }
    return hexCode
}

console.log(randomColor());
let setInter;
 document.querySelector('#start').addEventListener('click', (e) => {
    if(!setInter){

        setInter = setInterval(() => {
            document.body.style.backgroundColor = randomColor()
        }, 1000);
    }
}, false);
 document.querySelector('#stop').addEventListener('click', (e) => {
    clearInterval(setInter)
    setInter = null;
}, false);

