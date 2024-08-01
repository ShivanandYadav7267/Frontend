//Functions in JS

// console.log("hello!");
// "abc".toUpperCase()
// [1,2,3].push(4);

// function myFunction() {  //parameter-> input
//     console.log("welcome to my youtube channel");
//     console.log("We are learninf JS:)");
// }

// myFunction();
// myFunction();
// myFunction();
// myFunction();

// function myFunction(msg, n) {
//      //parameter-> input
//     console.log(msg);

// }

// myFunction("I Love Javascript,100"); // argument

//Fujction -> mumbers, sum

// function sum(x,y){
//    console.log(x + y);
//local variables -> scope
//    sum = x + y;
//    console.log("before return");
//    return sum;
// }
// let val = sum(3, 4);
// console.log(val);

// sum function
// function sum(a, b) {
//     return a + b;
// }
//Modern JS
// const arrowSum = (a, b)=>{
//     console.log(a + b);
// };

// multiplication function
// function mul(a, b) {
//     return a * b;
// }
// const arrowMul =  (a, b)=>{
//     console.log(a * b);
// };
//  const printHello = () => {
//     console.log("hello");
//  }

// Let,s Practice
// Qs. Create a function using the "function" keyword that takes a String as an argument & returns the numbet of vowels in th string.

// function countVowels(str) {
  
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// }


// Qs.Create an arrow function to perform the same task.
// const countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (
//                  char === "a" ||
//                    char === "e" ||
//                   char === "i" ||
//                    char === "o" ||
//                    char === "u"
//                  ) {
//                    count++;
//                 }
//     }
//     return count;
// }



// forEach Loop in Arrays
// arr.forEach( callBackFunction)
// [1, 2, 3]

//  function abc(){
//   console.log("hello");
// }
//   function myFunc(abc){
//     return abc;
//   }

  // let arr = [1, 2, 3, 4, 5];
//   arr.forEach(function printVal(val){
// console.log(val);
//   })

  //or 
  // let arr = ["pune", "delhi", "mumbai"]
  // arr.forEach((val, idx, arr) => {
  //   // console.log(val);
  //   console.log(val.toUpperCase(), idx, arr)
  // });

  //Let's Practice
  // For a given array of numberd, print the square of each value using the forEach loop.
  // let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // nums.forEach((num) =>{
  //   console.log(num * num);
  // });
//or
  // let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //  let calcSquare = (num) => {
  //    console.log(num * num);
  // };
  // nums.forEach(calcSquare);

  //Some More Array Methods 
  //MAP
  // let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // nums.map((val) =>{
  //   console.log(val);
  //   return val;
  // });
//  let newArr = nums.map((val) =>{
       
//        return val*val;
//     });
//     console.log(newArr);

//FILTER
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenArr = arr.filter((val) => {
//   // return val % 2 === 0;
//   // return val % 2 !== 0;
//   return val >3 ;
// });
// console.log(evenArr);

//REDUCE
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const output = arr.reduce((res, curr) =>{
//   // return res + curr; //add all number
//   return res > curr ? res : curr; //Largest number
// });
// console.log(output);

//Let's Practice 
// 1. We are geven array of marks of students. Filter our of the marls of srudents that scored 90+.
//  let arr = [98, 92, 90, 57, 69, 77, 85, 99];
// let studentsMarks = arr.filter((val) => {
// //    return val % 2 === 0;
// //  return val % 2 !== 0;
//    return val > 90 ;
// });
//  console.log(studentsMarks);

//2.Take a number n as unput from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate dum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array. 
// let n = prompt('enter a number : ');
// let arr = [];
// for ( let i=1; i<=n; i++) {
//   arr[i-1] = i;
//   console.log(arr);
// }
// let sum = arr.reduce((res, curr) => {
//   return res + curr;
// })
// console.log("sum =",sum);


// let factorial = arr.reduce((res, curr) => {
//   return res * curr;
// })
// console.log("factorial = ", factorial);