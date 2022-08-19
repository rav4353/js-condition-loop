// ---- Conditional Statements ----

// if 

if (new Date().getHours() < 18) {
    console.log("Good day!");
}


// if else 

const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);


// else if

const time = new Date().getHours();
let greet;
if (time < 10) {
  greet = "Good morning";
} else if (time < 20) {
  greet = "Good day";
} else {
  greet = "Good evening";
}
console.log(greet);


//switch 

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saurday";
}
console.log(day);



// ---- Loops ----


// for loop

const cars = ["BMW", "Volvo", "Saab", "Ford"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "\n";
}

console.log(text);



// for in

const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

console.log(txt);



// for of

const carss = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (let y of carss) {
  text1 += y + "\n";
}

console.log(text1);



// while

let texts = "";
let i = 0;
while (i < 5) {
  texts += "\nThe number is " + i;
  i++;
}
console.log(texts);



// do while

let text3 = ""
let j = 0;

do {
  text3 += "\nThe number is " + j;
  j++;
}
while (j < 5);  

console.log(text3);