const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // You missed the parentheses for the function call
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (isNaN(height) || height <= 0) { // Updated the condition
        result.innerHTML = "Please give a valid height.";
    } else if (isNaN(weight) || weight <= 0) { // Updated the condition
        result.innerHTML = "Please give a valid weight.";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); // Fixed the formula and added toFixed(2) for two decimal places
        result.innerHTML = `BMI: <span>${bmi}</span>`;
    }
});
