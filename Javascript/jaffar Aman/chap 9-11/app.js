// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var city = prompt("Enter city name");
// if (city === "Karachi") {
//     alert("Welcome to city of lights");
// }   ==> Done

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

//var gender= prompt("Enter the gender: ");
//if(gender=="male")
//{
//    alert("Good Morning Sir");
//}
// elseif(gender=="female")
//{
//    alert("Good Morning Ma'am");
//}   ==> Done

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// var color = prompt("Enter color of road traffic signal");
// if (color === "Red") {
//     alert("Must Stop");
// }
// else if (color === "Yellow") {
//     alert("Ready to move");
// }
// else if (color === "Green") {
//     alert("Move now");
// }   ==> Done

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var fuel = +prompt("Enter remaining fuel in car (in litres)");
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }   ==> Done

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }   ==> Done
// b. var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }   ==> Done
// c. var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }   ==> Done
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }   ==> Done
// e. if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }   ==> Done
// f. if ("car" < "cat") {
//     alert("car is smaller than cat");
// }   ==> Done

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// var totalMarks = 300;
// var obtainedMarks = +prompt("Enter obtained marks");
// var percentage = (obtainedMarks / totalMarks) * 100;
// var grade, remarks;
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// }
// else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<h1>Marks Sheet</h1><br>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");   ==> Done

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// var secretNumber = 7;
// var guessNumber = +prompt("Guess the secret number");
// if (guessNumber === secretNumber) {
//     alert("Bingo! Correct answer");
// }
// else if (guessNumber === secretNumber + 1) {
//     alert("Close enough to the correct answer");
// }   ==> Done

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var number = +prompt("Enter a number");
// if (number % 3 === 0) {
//     alert("Number is divisible by 3");
// }   ==> Done

// 9. Write a program that checks whether the given input is an even number or an odd number.

// var number = +prompt("Enter a number");
// if (number % 2 === 0) {
//     alert("Number is even");
// }
// else {
//     alert("Number is odd");
// }   ==> Done

// 10. Write a program that takes temperature as input and shows a message based on following criteria

// var temperature = +prompt("Enter temperature");
// if (temperature > 40) {
//     alert("It is too hot outside.");
// }
// else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// }
// else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// }
// else {
//     alert("OMG! Today’s weather is so Cool.");
// }   ==> Done

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:

// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// var operator = prompt("Enter operator");
// var result;

// if (operator === "+") {
//     result = firstNumber + secondNumber;
// }
// else if (operator === "-") {
//     result = firstNumber - secondNumber;
// }
// else if (operator === "*") {
//     result = firstNumber * secondNumber;
// }
// else if (operator === "/") {
//     result = firstNumber / secondNumber;
// }
// else if (operator === "%") {
//     result = firstNumber % secondNumber;
// }
// else {
//     alert("Invalid operator");
// }
// document.write("Result: " + result);   ==> Done

