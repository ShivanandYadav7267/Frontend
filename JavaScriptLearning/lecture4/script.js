// Arrays

// let marks_student1 = 97;
// let marks_student2 = 97;

// let marks = {
//     stu1: 96,
//     stu2: 87,
// }

// let marks = [98, 84, 74, 74,38];
// console.log(marks);
// console.log(marks.length); // property

// let heroes = ["Thor", "Hulk", "Ironman", "Shaktiman"];
// console.log(heroes);
// for(let idx=0; idx<heroes.length; idx++){
//    console.log(heroes[idx]) ;
// }
// for of
// for(let hero of heroes){
//     console.log(hero.toUpperCase());
// }

// let cities = ["delhi","uttar pradesh","lucknow","mumbai"]
//  for (let city of cities) {
//     console.log(city.toUpperCase());
//  }

//Lit Practice

//Qs For a given with marks of students-> [85,97,44,37,76,60]
//Find the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76,60];
// let sum = 0;
// for(let val of marks){
//     sum +=  val;
// }

// console.log (sum);

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

// Qs. For a given array with prices of 5 items->[250,745,300,900.50]
//All items have an offer of 10% OFF on them. Change the array to store final price after
//applying offer.

// let item = [250, 645,300, 900,50];
// for (let value of item){
//     offer = value/10;
//     price = value-offer;
//     console.log(price);
// }

//or
// let item = [250, 645, 300, 900, 50];

// let i = 0;
// for (let value of item) {
//   console.log(`value at index ${i} = ${value}`);
//   let offer = value / 10;
//   item[i] = item[1] - offer;
//   console.log(`value after offer = ${item[i]}`);
//   i++;
// }


//Array methods


//push():add to end
  
// let  fooditems = ["potato","apple","tomato","branjil"];
// fooditems.push("chips","burger","paneer");
// console.log(fooditems);

//pop():delete from ind & return


// let  fooditems = ["potato","apple","tomato","branjil"];
// console.log(fooditems);
// let deleteditems = fooditems.pop();
// console.log(fooditems);
// console.log(deleteditems);

//toString():convert array to string
// let  fooditems = ["potato","apple","tomato","branjil"];
// console.log(fooditems);
// console.log(fooditems.toString());
// let marks = ["84","74","93","84","75"];


//Concat():joins multiple arrays & returns result
// let marvelHeroes = ["thor", "spiderman","iroman"];
// let dcHeroes = ["superman","batman"];
// let indianHeroes = ["Krish","shaktiman"]
// let heroes = marvelHeroes.concat(dcHeroes).concat(indianHeroes);
// console.log(heroes);

//unshift(): delete from start & return
// let marvelHeroes = ["thor", "spiderman","iroman"];
// marvelHeroes.unshift("antman");

// let val = marvelHeroes.shift();
// console.log ("deleted", val);

//slice():returns a piece of the array
// let marvelHeroes = ["thor", "spiderman","iroman","Dr. Strand","hulk","loki","hina"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(2,6));

//Splice()change original array (add, remove, replace)
//          let arr = [1,2,3,4,5,6,7];
// arr.splice(2,1,77,88,);
//Add Element
// arr.splice(0,0,67,87);
//Delete Element
// arr.splice(5,1);
//Repace Element
//arr.splice(99,1,88);



//Let's Practice
//Qs.Create an array to store companies ->"Boomberg","Uber","Google",IBM
//,"Netflix"
//a.Remove the first company from the array 
//b.Remove Uber & Add Ola in its place 
//c.Add Amaxon at the end


// let companies = ["Boomberg","Microsoft","Uber","Google","IBM"
// ,"Netflix"];
// console.log(companies);
//  companies.shift();
//  companies.splice(2,1,"Ola");
//  companies.push("Amazon");









































































































