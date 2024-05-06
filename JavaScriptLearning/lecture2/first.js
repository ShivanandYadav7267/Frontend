// Operators & Conditional Statments

// console.log("Hello JavaScript");
// let a = 10;
// let b = 2;
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
let age = 15;
if(age >= 18){
    console.log("we can vote");
}

if(age < 18){
    console.log("we cannot vote");
}

let mode = "dark";
let Color;

if(mode === "dark"){
    Color = "black";
}

if(mode === "light"){
    Color = "white";
}

console.log(Color );