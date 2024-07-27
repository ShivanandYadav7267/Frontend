// For loops

// Print 1 to 5
// for(let i=1; i<=70; i++){
//     console.log("Shivanand Yadav");
// }

// for(let i=1; i<=7; i++){
//     console.log("i =",i);
// }

// calculate sum 1 to n number
// let sum = 0;
// let n = 7;
// for(let i = 1; i <= n; i++){
//    sum = sum + i;
// }
// console.log("sum =", sum);
// console.log("XYZ")

// While loop

// let i = 1;
// while(i <= 10) {
//     console.log("Shivanand");
//     i++;
// }

// do-while loop

// let i = 10;
// do {
//     console.log("Shivanand");
//     i++;
// }while(i <= 6);

// for-of-loop
// let str = "ShivanandYadav";
// let size = 0;
// for(let i of str){
//     console.log(i);
//     size++;
// }

// console.log("string size",size);

// for-in-loop

// let student = {
//     name:"XYZ",
//     age: 24,
//     cgpa: 8.5,
//     isPass: true
// };
// for (let key in student){
//     console.log("key =", key, "value=" ,student[key]);
// }
// Question1: Print all even nubers from 0 to 100?

// for (let number = 0; number <= 100; number++) {
//   if (number % 2 === 0) {
//     console.log("number =", number);
//   }
// }

// for (let number = 0; number <= 10; number++) {

//       console.log( number);

//   }

// Question2:Create a game where you start with any random game number.
//  Ask the user to keep guessing the game number untill the enter correct value.

// let gameNum = 35;
// let userNum = prompt(" Gusse the game number: ");

// while (userNum != gameNum){
//      userNum = prompt("You entered wrong number : Gusse again ");
// }
//  console.log("Congratulation: you entered correct number");

// STRINGS IN jS

//  let str = 'XYZ';
//  let str2 = "XYZA";
//  console.log(str[2]);

// Template literels

// let obj = {
//     item: "pen",
//     price: "15",

// };
// let output = `the cost of ${obj.item} is ${obj.price} rupess`;
// console.log(output);

// console.log("the cost of ", obj.item, "is",obj.price);

// let specialString = `This is special String ${5+6}`;
// console.log( specialString);
// console.log( typeof specialString);
// console.log(  specialString);
// console.log("Shivanand\nYadav");
// console.log("Shivanand\tYadav");

// let str = "Shivanand\nYadav";
// console.log("str.length");

// String Methods in JS

// let str = "Shivanand";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);

// let str = "Shivanand";
// str = str.toUpperCase();
// console.log(str);

// let str = "Shivanand";
// str = str.toLowerCase();
// console.log(str);

// let str =       "     Shivanand     Yadav";
// console.log(str.trim());

// slice

// let str ="01234567";
//  console.log(str.slice(1,4));

// str1.concat(str2)//joins str2 with str1
// let str1 = "Shivanand";
// let str2 = " Yadav";
// let res = "My name is " + str1.concat(str2);
// let res2="hello"+ "javascript";
// console.log(res);
// console.log(res2);

// str.repace(searchBal,newVal)

// let str ="hhhhhhhhello";
// console.log(str);
// console.log(str.replace("h", "y"));
// console.log(str.replaceAll("h", "y"));

// structuredClone.charAt(idx)

// let str ="Shivanand";
// str = str.replaceAll("a","0");
// console.log(str);

// Let's Practice
// Qs1 Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and inding with the fullname length.

// let str = prompt("Enter your full name");
// let str2 = str.length;
// let print ="@" + str.concat(str2);
// let print ="@" + str + str.length;
// console.log(print);