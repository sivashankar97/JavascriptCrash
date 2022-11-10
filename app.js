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

let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

nums === mystery; // false

nums === moreNums; //true

const user = {
  username: "CherryGarcia8",
  email: "garcia@gmail.com",
  notifications: ["message", "alert"],
};

//not WORK!
if (user.notifications === []) {
  console.log("NO NEW NOTIFICATIONS!");
}
// WORK!
if (!user.notifications.length) {
  console.log("NO NEW NOTIFICATIONS!");
}

// Printing each element in an array
const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}

//nested loop
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}

function greet(nickname) {
  console.log(`Hi, ${nickname}!`);
}
greet("Sansa");
greet("Ramsay");

// EXAMPLE 2
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}
// We can now specify how many dice to roll!
function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}

throwDice(2);
throwDice(6);

//for loop arrays

let no = ["l", "h", "k"];
let nos = ["s", "r", "4"];
for (let index = 0; index < no.length; index++) {
  const element = array[index];
  console.log(element);
}

//nested loop
for (let index = 0; index < no.length; index++) {
  const element = array[index];
  console.log(element);

  for (let index = 0; index < nos.length; index++) {
    const elementone = nos[index];
    console.log(elementone);
  }
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(guess);
  guess = Math.floor(Math.random() * 10);
}
console.log(`target :${target} Guess: ${guess}`);

//function

const userinfo = {
  name: "shankar",
  lastname: "cj",
};

for (let prop in userinfo) {
  console.log(prop);
  console.log(userinfo[prop]);
}

//function

function add(x, y) {
  return x + y;
}

//scope

function lo() {
  let person = "tomm";
}
lo();
console.log(person);

//block scope

if (true) {
  let anial = "eel";
}
console.log(animal);

//lexical scope

function outer() {
  let movie = "lil";
  function inner() {
    console.log(movie.toUpperCase());
  }
  inner();
}

//function expression

const square = function (num) {
  return num * num;
};

square(7); //49

//higher order function

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x + y;
}

const operation = [add, sub];

operation[1](4, 5);

function callTwice(func) {
  func();
  func();
  func();
}

function cry() {
  console.log("haha");
}

callTwice(cry); // threetimes
