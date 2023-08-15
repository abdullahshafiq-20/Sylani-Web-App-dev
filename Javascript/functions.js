const prompt = require("prompt-sync")({sigint   : true});

//Question 1
function greet(name) {
  console.log(`Hello, ${name}! How can I assist you today?`);
}
greet("Alice");
greet("Bob");
greet("Charlie");


//Question 2
function greetUser(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    console.log('Hello, ' + fullName + '! How can I assist you today?');
  }
  greetUser("Alice", "Johnson");
  greetUser("Bob", "Smith");
  greetUser("Charlie", "Brown");


//Question 3
function addNumbers() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const sum = num1 + num2;
    return sum;
  }
  const result = addNumbers();
  console.log("The sum is:", result);


//Question 4
function performOperation(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          return "Cannot divide by zero!";
        }
        break;
      default:
        return "Invalid operator";
    }
  
    return result;
  }
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operator = prompt("Enter the operator (+, -, *, /):");
  
  const result1 = performOperation(num1, num2, operator);
  
  if (typeof result1 === "number") {
    console.log(`The result of ${num1} ${operator} ${num2} is: ${result1}`);
  } else {
    console.log(result1);
  }


//Question 5
function square(number) {
    return number * number;
  }
  
  const inputNumber = parseFloat(prompt("Enter a number:"));
  const squaredResult = square(inputNumber);
  
  console.log(`The square of ${inputNumber} is: ${squaredResult}`);

//Question 6

function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  const inputNumber1 = parseInt(prompt("Enter a number:"));
  
  if (inputNumber1 < 0) {
    console.log("Factorial is not defined for negative numbers.");
  } else {
    const result = factorial(inputNumber1);
    console.log(`The factorial of ${inputNumber1} is: ${result}`);
  }
  
  
  
