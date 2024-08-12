//event Handling in JS
// let btn1 = document.querySelector("#btn1");

// btn1.onclick =() => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// btn1.onclick =(e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }


//Event Object
// let div = document.querySelector("div");
// div.onmouseover = (e)=> {
//     console.log("you are inside div");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// };

//event Listeners
// btn1.addEventListener("click", (e) => {
//     console.log("button1 was clicked");
//     console.log(e);
//     console.log(e.type);
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked2");
// });


// const handler2 =  () => {
//     console.log("button1 was clicked2");
// };

// btn1.removeEventListener("click", handler2);

//Let's Practice
//1.Create a toggle button that changes th screen to dark-mode when clicked  & light-mode when clicked again.


// let modeBtn = document.querySelector("#mode");
// let currMode = "light";

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// });

//or 



// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         body.classList.add = ("dark");
//         body.classList.remove("light");
//     } else {
//         currMode = "light";
//         body.classList.add = ("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });