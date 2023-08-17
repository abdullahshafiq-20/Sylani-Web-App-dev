
function calculate() {
    const num1 = parseFloat(document.querySelector('#num1').value);
    const num2 = parseFloat(document.querySelector('#num2').value);
    const operator = document.querySelector('#operator').value;
    const resultElement = document.querySelector('#result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = "Please enter valid numbers.";
        return;
    }

    let result = 0;
    switch (operator) {
        case 'Add':
            result = num1 + num2;
            break;
        case 'Subtract':
            result = num1 - num2;
            break;
        case 'Multiply':
            result = num1 * num2;
            break;
        case 'Divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                resultElement.innerHTML = "Cannot divide by zero.";
                return;
            }
            break;
        default:
            resultElement.innerHTML = "Please select an operator.";
            return;
    }
    resultElement.innerHTML = "Result:"+result;

    
}
