// Mode button setting
const body = document.querySelector('body');
let span = document.querySelectorAll('span');
span.forEach((button) => {
    button.addEventListener('click', (e) => {
        const result = document.getElementById('result')
        const weightGuide = document.getElementById('weightGuide')

        if (e.target.id === "black") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "#fff";
            result.style.borderBottom = '1px solid white';
            weightGuide.style.borderBottom = '1px solid white';
        } if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id
            body.style.color = "black";
            result.style.borderBottom = '1px solid black';
            weightGuide.style.borderBottom = '1px solid black';

        }
    })
})

// Working on app
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.getElementById('result')
    const weightGuide = document.getElementById('weightGuide')
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Result :  Please enter a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Result :  Please enter a valid weight ${weight}`
    } else {
        const BMI = (weight / (height * height)) * 10000;
        result.innerHTML = `Result : ${BMI.toFixed(2)}`;
        if (BMI < 18.5) {
            weightGuide.innerHTML = "Weight_Guide : Underweight";
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            weightGuide.innerHTML = "Weight_Guide : Normal";
        } else if (BMI >= 25 && BMI <= 29.9) {
            weightGuide.innerHTML = "Weight_Guide : Overweight";
        } else if (BMI >= 30) {
            weightGuide.innerHTML = "Weight_Guide : Obese";
        }
    }

})