            //DOM Manipulation

// let div = document.querySelector("div");
// console.log(div);

              //Set Attribute

//  let id = div.getAttribute("id");
//  console.log(id);

// let div = document.querySelector("div");
//  console.log(div);

//  let name = div.getAttribute("name");
//  console.log(name);

//  let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

               //Set Attribute
// let newpara = document.querySelector("p");
// console.log(newpara.setAttribute("class", "newclass"));

//style
//node.style


//  let div = document.querySelector("div");
//  div.style.backgroundColor = "green";
//  div.style.backgroundColor = "#FFgh56"; 
// div.style.backgroundImage = "linear-gradient(300deg, #FFFFEE 5%, #9284FF 50%, #FF0000 120%)";
// div.style.visibility = "hidden";
//  div.style.fontSize = "45px";
//  div.innerText = "Hello Friend";



                //DOM Manipulation
                //Insert Elements

//node.apppend(el)//adds at the end of node (inside)
//node.prepend(el)//adds at the start of node (inside)
//node.before(el)//adds before the node (outside)
//node.aftere(el)//addss after the node (outside)


// let newBtn = document.createElement("button");

// newBtn.innerText = "click me!";
//  console.log(newBtn);


// let div = document.querySelector("div");
// div.append(newBtn);
//div.prepend(newBtn);
//div.before(newBtn);
//div.after(newBtn);
// newBtn.style.width = "40px";
// newBtn.style.height = "40px";
// newBtn.style.marginLeft = "20px";



// let newHeading = document.createElement("h2");
// newHeading.innerHTML = "This is your heading tag";
// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();

// Let's Practice question?

// 1. Create a new btton element. Give it a text "click me", background color of red & texr color of white.
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newBtn);



// 2. Create a <p> tag in html,give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
// Did you notice,how you overwrite the class name when you add a new one?
// Solve this problem using classList.
 
// let para = document.querySelector("p");
// para.setAttribute("class","newClass"); //this is stop styling first class!
// para.classList.add("newClass");