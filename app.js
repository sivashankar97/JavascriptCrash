if (1 !== 1) {
  console.log("its true");
}

///////
let ratings = 2;

if (ratings === 2) {
  console.log("Super star");
}

////
let newRatings = 3;

if (newRatings === 2) {
  console.log("its trie");
} else {
  console.log("its false");
}

let password;

if (password.length >= 6) {
  if (password.indexOf("") !== -1) {
    console.log("valid password");
  } else {
    console.log("valid passwor but contains");
  }
} else {
  console.log("length is not enough");
}

//truthy & false

// AND &&

// or ||

// NOT (!) flasy into truthy

//operator presidence  ! && ||  you can alter using parans ()

//switch
let day = 2;

if (day === 1) {
  console.log("MONDAY");
} else if (day === 2) {
  console.log("TUESDAY");
} else if (day === "wedenesday") {
  console.log("wedensday");
}

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
}

//Ternary Operator

let num = 7;

num === 7 ? console.log("right") : console.log("wrong");

let status = "offline";

let color = status === "offline" ? "red" : " green";

//creating Arrays & Objects

let colors = ["red", "blue", "green", "white", "blue"];

colors.length();

colors[1] = " seal"; // blue will cahnge to seal

//array methods
// push - add to end
// pop - remove from end
// shift - remove from start
//unshift - add to start

colors.push("violet");
colors.pop();
colors.shift();
colors.unshift("magnda");

// other mthods
//concat

let fruits = ["bel", "hell", "dog"];

let coloFruits = colors.concat(fruits);

//includes
colors.includes("red"); //true its for finding

//indexoF

colors.indexOf("blue"); // 1

//join and reverse

colors.reverse(); //reverse everything

colors.join("."); //it will join like .

//slice

let preColor = colors.slice(0, 3); //include the index 0 and not include the index 3

//splice

colors.splice(3, 2);

// array sort

colors.sort(); //sorting from alpahtes

//RFERENCE TYPE ////////////////////////////////////////////

// vlaue type Variable
//nested array

const animal = [
  ["hen", "chciekne"],
  ["ewe", "pop"],
  ["kowl", "novwl"],
];

animal[2]; // kowl ,nowl
animal[2][1]; //nowl

//objects
//accesing data

let colorSS = {
  red: "red",
  blue: "blue",
};

colorSS.red; // red
colorSS["blue"]; //blue

///updateing adding

const userReviews = {};

userReviews["shankar"] = "shankar";

userReviews.lastname = "cj";

//netset array and objects
const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

const avg = (student.exams.midterm + student.exams.final) / 2;
