// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var a = 3;
// var b = 5;
// var c = a + b;
// document.write("Sum of " + a + " and " + b + " is " + c + "<br>");   ==> Done

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// var a = 3;
// var b = 5;
// var c = a - b;
// document.write("Subtraction of " + a + " and " + b + " is " + c + "<br>");

// var d = a * b;
// document.write("Multiplication of " + a + " and " + b + " is " + d + "<br>");

// var e = a / b;
// document.write("Division of " + a + " and " + b + " is " + e + "<br>");

// var f = a % b;
// document.write("Modulus of " + a + " and " + b + " is " + f + "<br>");   ==> Done

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// var a;
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// document.write("Value after variable declaration is " + a + "<br>");
// c. Initialize the variable with some number.
// a = 5;
// d. Show the value of variable in your browser like “Initial value: 5”.
// document.write("Initial value: " + a + "<br>");
// e. Increment the variable.
// a++;
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// document.write("Value after increment is: " + a + "<br>");
// g. Add 7 to the variable.
// a = a + 7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// document.write("Value after addition is: " + a + "<br>");
// i. Decrement the variable.
// a--;
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// document.write("Value after decrement is: " + a + "<br>");
// k. Show the remainder after dividing the variable’s value by 3.
// a = a % 3;
// l. Output : “The remainder is : 0”.
// document.write("The remainder is: " + a + "<br>");   ==> Done

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR<br>");   ==> Done

// 5. Write a script to display multiplication table of any number in your browser.

// var table = 4;
// document.write("Table of " + table + "<br>");
// for (var i = 1; i <= 10; i++) {
//     document.write(table + " x " + i + " = " + table * i + "<br>");
// }   ==> Done

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// var celsius = 25;
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// var fahrenheit = (celsius * 9 / 5) + 32;
// document.write(celsius + "<sup>o</sup>C is " + fahrenheit + "<sup>o</sup>F<br>");
// c. Now store a Fahrenheit temperature into a variable.
// var fahrenheit = 70;
// d. Convert it to Celsius & output “NNoF is NNoC”.
// var celsius = (fahrenheit - 32) * 5 / 9;
// document.write(fahrenheit + "<sup>o</sup>F is " + celsius + "<sup>o</sup>C<br>");   ==> Done

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges

// var priceOfItem1 = 650;
// var priceOfItem2 = 100;
// var orderedQuantityOfItem1 = 3;
// var orderedQuantityOfItem2 = 7;
// var shippingCharges = 100;

// document.write("Price of item 1 is " + priceOfItem1 + "<br>");
// document.write("Quantity of item 1 is " + orderedQuantityOfItem1 + "<br>");
// document.write("Price of item 2 is " + priceOfItem2 + "<br>");
// document.write("Quantity of item 2 is " + orderedQuantityOfItem2 + "<br>");
// document.write("Shipping charges " + shippingCharges + "<br><br>");

// var totalCost = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges;

// document.write("Total cost of your order is " + totalCost + "<br>");   ==> Done

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.

// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%<br>");   ==> Done

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.

// var usDollars = 10;
// var saudiRiyals = 25;
// var totalCurrency = (usDollars * 286) + (saudiRiyals * 76.24);

// document.write("Total Currency in PKR: " + totalCurrency + "<br>");   ==> Done

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:

// var number = 5;
// a. Add 5
// number = number + 5;
// b. Multiply by 10
// number = number * 10;
// c. Divide the result by 2
// number = number / 2;
// d. Subtract 6
// number = number - 6;
// e. Output : “The remainder is : 0”
// document.write("The remainder is: " + number + "<br>");   ==> Done

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// var currentYear = 2023;
// b. Store their birth year in a variable.
// var birthYear = 2000;
// c. Calculate their 2 possible ages based on the stored values.
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;
// d. Output them to the screen like so: “They are either NN or NN years old”.
// document.write("They are either " + age1 + " or " + age2 + " years old<br>");   ==> Done

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// var radius = 20;
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// var circumference = 2 * 3.142 * radius;
// document.write("The circumference is " + circumference + "<br>");
// Calculate the area based on the radius, and output “The area is NN”.
// var area = 3.142 * radius * radius;
// document.write("The area is " + area + "<br>");   ==> Done

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// var favoriteSnack = "chocolate";
// b. Store your current age into a variable.
// var currentAge = 15;
// c. Store a maximum age into a variable.
// var maximumAge = 75;
// d. Store an estimated amount per day (as a number).
// var estimatedAmountPerDay = 2;
// e. Calculate how many would you eat total for the rest of your life.
// var total = (maximumAge - currentAge) * estimatedAmountPerDay;
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// document.write("You will need " + total + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "<br>");   ==> Done




