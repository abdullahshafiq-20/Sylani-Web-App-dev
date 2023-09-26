// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// var a = 10;
// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("...........................................<br><br>");
// document.write("The value of ++a is: " + ++a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of a++ is: " + a++ + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of --a is: " + --a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of a-- is: " + a-- + "<br>");
// document.write("Now the value of a is: " + a + "<br>");   ==> Done

// 2. What will be the output in variables a, b & result after execution of the following script:

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>");   ==> Done

// 3. Write a program that takes input a name from user & greet the user.

// var name = prompt("Enter your name");
// alert("Hello " + name);   ==> Done

// 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// var table = +prompt("Enter a number to show its multiplication table");
// if (table === 0) {
//     table = 5;
// }
// document.write("Table of " + table + "<br>");
// for (var i = 1; i <= 10; i++) {
//     document.write(table + " x " + i + " = " + table * i + "<br>");
// }   ==> Done

//  5. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// var subject1 = prompt("Enter first subject name");
// var subject2 = prompt("Enter second subject name");
// var subject3 = prompt("Enter third subject name");
// var totalMarks = 100;
// var obtainedMarksSubject1 = +prompt("Enter obtained marks for " + subject1);
// var obtainedMarksSubject2 = +prompt("Enter obtained marks for " + subject2);
// var obtainedMarksSubject3 = +prompt("Enter obtained marks for " + subject3);
// var percentageSubject1 = (obtainedMarksSubject1 / totalMarks) * 100;
// var percentageSubject2 = (obtainedMarksSubject2 / totalMarks) * 100;
// var percentageSubject3 = (obtainedMarksSubject3 / totalMarks) * 100;
// var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
// var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
// document.write("<table>");
// document.write("<tr>");
// document.write("<th>Subject</th>");
// document.write("<th>Total Marks</th>");
// document.write("<th>Obtained Marks</th>");
// document.write("<th>Percentage</th>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subject1 + "</td>");
// document.write("<td>" + totalMarks + "</td>");
// document.write("<td>" + obtainedMarksSubject1 + "</td>");
// document.write("<td>" + percentageSubject1 + "%</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subject2 + "</td>");
// document.write("<td>" + totalMarks + "</td>");
// document.write("<td>" + obtainedMarksSubject2 + "</td>");
// document.write("<td>" + percentageSubject2 + "%</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subject3 + "</td>");
// document.write("<td>" + totalMarks + "</td>");
// document.write("<td>" + obtainedMarksSubject3 + "</td>");
// document.write("<td>" + percentageSubject3 + "%</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td></td>");
// document.write("<td><b>" + totalMarks * 3 + "</b></td>");
// document.write("<td><b>" + totalObtainedMarks + "</b></td>");
// document.write("<td><b>" + totalPercentage + "%</b></td>");
// document.write("</tr>");
// document.write("</table>");   ==> Done

