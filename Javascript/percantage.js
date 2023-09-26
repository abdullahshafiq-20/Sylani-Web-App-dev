const prompt = require("prompt-sync")({sigint   : true});


// var sub1 = prompt("Enter your chemistry marks");
// var sub2 = prompt("Enter your physics marks");
// var sub3 = prompt("Enter your maths marks");
// var sub4 = prompt("Enter your english marks");
// var sub5 = prompt("Enter your urdu marks");

// var totalMarks = 500;
// var obtainMarks = parseInt(sub1) + parseInt(sub2) + parseInt(sub3) + parseInt(sub4) + parseInt(sub5);
// var percentage = (obtainMarks / totalMarks) * 100;
// console.log("Your percentage is " + percentage + "%");


var num1=10;
var result = num1 + ++num1 +num1++ + --num1 -num1-- - --num1;
console.log(result);

