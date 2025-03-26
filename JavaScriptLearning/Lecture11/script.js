
//Obejects

/*
const student = {
    fullName : "Shivanand Yadav",
    marks: 87.6,
    printMarks: function() {
        console.log("marks = ",this.marks); // this.= student
    },
}
*/
/*
const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary:500000,
    calcTax() {
    console.log("tax rate is 30%");
},
};


const karanArjun1 = {
    salary:500000,
    calcTax() {
    console.log("tax rate is 30%");
},
};

const karanArjun2 = {
    salary:500000,
    calcTax() {
    console.log("tax rate is 30%");
},
};

const karanArjun3 = {
    salary:500000,
    calcTax() {
    console.log("tax rate is 30%");
},
};

const karanArjun4 = {
    salary:500000,
    calcTax() {
    console.log("tax rate is 30%");
},
};


karanArjun.__proto__ = employee;
karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
*/

//Classes
/*
class toyoutaCar{
    constructor(brand, milege){
        console.log("creating new class");
        this.brand = brand;
        this.milege = milege;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

}

let fortuner = new toyoutaCar ("fortuner" , 10);
console.log(toyoutaCar);
let lexus = new toyoutaCar("lexus", 12);
console.log(lexus);
*/

// Inheritance in JS

/*
 class parent{
    hello(){

        console.log("Hellow");

    }
 }

 class child extends parent {}

let obj = new child(); 
*/


/*
class Person{
    sleep(){
        console.log("Sleep");
    }

    eat() {
        console.log("Eat");
    }
}

class Engineer extends Person {
    work(){
        console.log("solve problems , build something")
    }
}

let nameObj = new Engineer();
*/

//Practice Question
//Q.1 You are crating a website for your college. Create a class
//User with 2 properties, name & email. It also has a method
// callled viewData()that allows user to view website data.

/*
let Data = "scret information" ;
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;


    }

    viewDatea(){
        console.log("Data", Data);
    }
}

let student = new user ("Tinku" , "tinku@gmail.com");
let student1 = new user ("Pinku" , "pinku@gmail.com");

class admin extends user {
    constructor(name, email){
        super(name, email);
    }
    editData(){
        data = "some new value";
    }
}

let admin = new Admin("admin" , "admin@gmail.com");
*/



