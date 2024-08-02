// console.log("hello!");
// alert("hello!")
// console.log("window");
// window.console.log("hello2");
// window.alert("hello!")
// console.dir(window.document);
// console.dir(document.body.childNodes[1]);
// console.dir(document.head);
// document.body.childNodes[1].innerText = "abcd";



//DOM Manipulation

//selecting with id
// let header = document.getElementById("myId");
// console.log(header);
// console.dir(header);

//selecting with class
// let headings = document.getElementsByClassName("header");
// console.dir(headings);
// console.log(headings);

//selecting with tag
//   let parahs = document.getElementsByTagName("p");
//   console.log(parahs);

  //selecting with query
//   let firstEl = document.querySelector("p");  //first element
//   console.log(firstEl); 
//   console.dir(firstEl);

//   let allElements = document.querySelectorAll("p");  //all element
//   console.log(allElements); 
//   console.dir(allElements);


//   let stEl = document.querySelector(".header");  //first element
//   console.log(stEl); 
//   console.dir(stEl);
//   let allEl = document.querySelectorAll(".header");  //all element
//   console.log(allEl); 
//   console.dir(allEl);




//   let idEl = document.querySelector("#myId");  //first element
//   console.log(idEl); 
//   console.dir(idEl);


// let div = document.querySelector("div");
// console.log(div);


// let heading = document.querySelector("h1");
// console.log(heading);




//Let's Practice
//Qs. Create a H2 heading element with text-"Hello JavaScript".Append "from XYZ students"to this text using JS.
  
// 1)access element
// 2)property -> change
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from XYZ collage students";





//Qs. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs){
//     div.innerText = `new unique value ${idx}`
//     idx++;
// }

//or


// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";
// console.log(div);
// console.dir(div);