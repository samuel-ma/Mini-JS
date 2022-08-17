
//functions in Javascript
function fun(){
  console.log("This is a function");
}
//call the function
fun()

//return something from a function
function greeting(yourName){
  let name = yourName;
  let result = "Hello " + name;
  console.log(result);
}
greeting("Samuel Ma");

//How do agruments work in Javascript?
//How do we add two numbers together in a function
function sumNumber(num1, num2){
  const result = num1 + num2;
  return console.log(result)
}
sumNumber(10, 20);

//Loops in Javascript

//How to use a while loop
let num3 = 0;
while(num3< 10){
  num3++;
  console.log(num3)
}

//How to use a for loop
for (let i=5; i<10; i++){
  console.log(i);
}

//Datatypes in Javascript

//number
let age = 22;

//string
let myFirstName = "Samuel";

//boolean
let bool = true;

//undefined
let random;

//objects
let obj = {
  name: "samuel ma",
  age: 22,
  bool: false,
}

//null
let nothing = null;

//Working with Strings in Javascript
let fruit = "apple";
let fruits = "apple, banana, orange, pineapple";

//creating a new line in a string
let newFruit = "banana \napple";
console.log(newFruit)
console.log(newFruit.length)
console.log(newFruit.indexOf("a"))
console.log(newFruit.slice(2, 6))
console.log(fruit.replace("a", "o"))
console.log(newFruit.toUpperCase())
console.log(fruits.split(","))

//Arrays in Javascript
let cars = ["toyota", "ferrari", "lambo", "bugatti"];
let cars2 = new Array("toyota", "ferrari", "bugatti", "lambo");

console.log(cars[3]);
cars[4] = "BMW";
console.log(cars)

//loop through an array
for (let i = 0; i<cars.length; i++){
  console.log(cars[i])
}

//array common methods
console.log("to String", cars.toString());
console.log(cars.pop())
console.log(cars.join("+"))
console.log(cars.push("MOTOROLA"), cars)
console.log(cars.shift(), cars)
console.log(cars.unshift("Prado"), cars)

//how to add to arrays
let sports = ["football", "basketball", "baseball", "netball"]
let combination = cars.concat(sports);
console.log(combination)
console.log(combination.sort())
console.log(sports.reverse())

let allNumbers = [1, 1 , 2, 3 ,4, 4, 3, 2, 3, ,2 ,4 ,5, 5, 2, 6, 6, 2, 6, 6];
console.log(allNumbers.sort(
  function(a,b){
    return b-a
  }
))

let emptyArray = [];
for (let i = 1; i<=10; i++){
  emptyArray.push(i)
}
console.log(emptyArray)


//Objects in Javascript
let student = {
  firstName: "Samuel",
  lastName: "Ma",
  age: 22,
  height: 190,
  studentInfo: function(){
    return this.firstName + " " + this.lastName + " is " + age + " years old.";
  },
}
console.log(student)
console.log(student.firstName)
console.log(student.lastName)
console.log(student.studentInfo())

//Conditionals, control flows  (if else)
let newAge = 22;

if ((age >= 10) && (age <= 35)){
  console.log("my target demo")
} else {
  console.log("not my demo");
}

//using a switch statement
 switch (1) {
  case 0:
      text = "Sunday";
      break;

  case 1:
      text = "Monday";
      break;

    case 2:
      text = "Tuesday";
      break;

      default:
        text = "Day of the week";
 }
console.log(text)

//Dealing with Json in Javascript
let students = `[
  {
    "name": "Samuel",
    "height": 190,
    "age": 22
  },

  {
    "name": "John",
    "height": 180,
    "age": 20
  }
]`;

console.log(JSON.parse(students))

