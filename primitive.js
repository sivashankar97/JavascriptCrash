 //primitive 
   // Numbers
   //CALCULATION

   //NaN
   //infinity


//Variables  
  let age = 22;

    age -1 // 21

    age = 22 // it will not chnage 

    age = age -1 

     age  // 21 it will chnage the variable

 const year = 1973;

    year = year + 1 // it will show error


//Boolean
let istrue = true;
let isfalse = false;

//varaible can chnage Anytype
  istrue = 400;


//Strings

let firstname = "shankar"
let lastname = "cj"

let fullname = firtsname + lastname;

fullname // "shankarcj"
fullname.length // 9
fullname[0]  // 0

//strings are immutable 

//String Methods
fullname.toUpperCase() // SHANKARCJ
fullname.toLowerCase() // shanjarcj

//remove space method
let exampple = " jfjjf "

exampple.trim()

//thing method

let tvshow = 'catdog'

tvshow.indexOf(cat) //0
tvshow.indexOf(dog) //3

//Slice method
tvshow.slice(0,5) // slice from zerod adn end before index 5

//replace
tvshow.replace('cat', 'bull') //replace cat with bulldog

// using  ' , " ./n  ,

//string template Literals

`shankar age ${4+5}` //shnkarage is 9 using back-tick
let minage = 21;
let youage = 14;

`you must age ${minage} and maximum age is ${minage - youage}` 



// null & undefined
  //null used to emty the variables
  //undefined don have value in varible 


//MATH OBJECT

Math.PI // 3.1444
Math.round(4.5) // 5 rounding number
Math.floor(3.76) // 3 
Math.pow(7,2) // 49

Math.random() // creating random number


//TypeoF

typeof  99 // "number"
typeof "string" //"string"
typeof undefined // "undefined"

//parsenInt and parseFloat

parseInt('21') + 1 // 22
parseFloat('33.5') //33.5


//Boolean Logic
//comparison 
55.1 <= 55 //true

//double equal

//== check value not type
 7 == 7  //true
  7 == '7' //true

//=== both value adn type 
7 === 7 //true
7 === '7' //false 


 