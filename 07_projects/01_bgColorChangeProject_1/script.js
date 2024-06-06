// const mybody = document.querySelector('body')
// console.log(mybody);


// Using Function Method
// const blue = () => {
//     const blueColor = document.getElementById('blue');
//     blueColor.addEventListener('click' , ()=>{
//         mybody.style.backgroundColor = 'blue';
//     })
// }
// const red = () => {
//     const Color = document.getElementById('red');
//     Color.addEventListener('click' , ()=>{
//         mybody.style.backgroundColor = 'red';
//     })
// }
// const orange = () => {
//     const Color = document.getElementById('orange');
//     Color.addEventListener('click' , ()=>{
//         mybody.style.backgroundColor = 'orange';
//     })
// }
// const green = () => {
//     const Color = document.getElementById('green');
//     Color.addEventListener('click' , ()=>{
//         mybody.style.backgroundColor = 'green';
//     })
// }

// blue()
// red()
// orange()
// green()


// Using forEach Method
const buttons = document.querySelectorAll('.bgChange')
const body = document.querySelector('body');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
    })
})



