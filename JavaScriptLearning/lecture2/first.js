// Operators & Conditional Statments

// console.log("Hello JavaScript");
// let a = 106;
// let b = 100;
// console.log("a = ",a, "& b =",b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);

// console.log("a % b=",a % b);
// console.log("a ** b =", a ** b);
// let x = 10;
// let y = 3;
// console.log("x % y =",x % y);
// console.log("x ** y =",x ** y);

// let a = 10;
// let b = 2;
// console.log("a = ",a, "& b =",b);
// // a = a+1;
// a--;  //or a = a-1
// console.log("a = ", a);

// Assignments Operators
// let a = 10;
// let b = 3;
// a += 5;
// //b %= 3;
// b **= 3;
// console.log("a = ", a);
// console.log("b = ", b);

//Compararison Operatore
//  let a = 5;
//  let b = 3;
//  console.log("a == b ", a == b);
//  console.log("a != b ", a != b);
//  console.log("a > b", a > b);
//  console.log("a < b", a < b);

// x = 2;
// y = 2;
// console.log("x <= y", x <= y);

//logical Operators
// let a = 5;
// let b = 4;
// let cond1 = a > b;
// let cond2 = a === 5;
// console.log("cond1 && cond1 =", a > b && a === 5);
// console.log("!(b > a) =", !(b > a) );

//Conditional Statement
// let age = 15;
// if(age >= 18){
//     console.log("we can vote");
// }

// if(age < 18){
//     console.log("we cannot vote");
// }

// let mode = "light";
// let Color;

// if(mode === "dark"){
//     Color = "black";

// }
// else{
//     Color = "white";
// }

// if(mode === "light"){
//     Color = "white";
// }

// console.log(Color );

// let age = 15;
// if (age >=18) {
//     console.log("we can vote");
// } else{
//     console.log("not vote");
// }

// Number odd or even
// let num = 18;
// if (num%2 === 0) {
//     console.log(num,"is even");
// } else{
// console.log (num,"is odd");
// }

//Syntax  --->  Rules

// else-if Statment
// let age = 65;
// if(age <= 60){
//     console.log("Middle");

// }  else if (age > 60){
//     console.log("Senior");
// }else {
//     console.log("Junior");
// }

// Ternary Operators
// let age = 18;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

// Let's practice
// Question no. 1
// Get user to input a number using prompt ("Enter a number"). Chek if the number is a multiple of 5 or not?

// let num = prompt("Enter a number:");

// if (num % 5 === 0) {
//   console.log(num, "is multiple of 5");
// } else {
//   console.log(num, "is not multiple of 5");
// }

// Question no. 2
// Write a code can give grades to students according to this scores:
// let Score = prompt("Enter your score (0-100):");
// let Grade;
// if (Score >= 80 && Score <= 100){
//     Grade = "A";
// } else if (Score >= 70 && Score <= 79){
//     Grade = "B";
// }else if (Score >= 60 && Score <= 69){
//     Grade = "C";
// }else if (Score >= 50 && Score <= 59){
//     Grade = "D";
// }else if (Score >= 0 && Score <= 49){
//     Grade = "F";
// }
// console.log("according to your scores,your grade was:",Grade);