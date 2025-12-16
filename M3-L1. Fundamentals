M3-L1.JavaScript-Fundamentals
Welcome to the JS Fundamentals Lab! These exercises are designed to test your understanding of JavaScript's core concepts, from type coercion and functions to objects and classes.

1. Type Coercion
Predict the result of each expression below, then verify your answer by running the code in the browser console.

"" + 1 + 0;
true + false;
6 / "3";
"2" * "3";
4 + 5 + "px";
"$" + 4 + 5;
"4" - 2;
"4px" - 2;
"  -9  " + 5;
"  -9  " - 5;
null + 1;
undefined + 1;
" \t \n" - 2;
Bonus: What is the result of undefined == null? What about undefined === null? Why?

2. String vs. Number Operations
The following code block has some unexpected results and a syntax error.

Your Tasks:
Fix the syntax error in the subtraction variable declaration.
Run the code and observe the results.
Add comments to explain why addition and lessThan2 produce their specific results.
let three = "3";
let four = "4";
let thirty = "30";

// What is the value of the following expressions?
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three  four; // Fix this line
let lessThan1 = three < four;
let lessThan2 = thirty < four;

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);
3. Truthy and Falsy Values
For each if statement below, predict whether the message will be logged to the console. Explain your reasoning for each.

if (0) console.log('#1: zero is true');
if ("0") console.log('#2: zero string is true');
if (null) console.log('#3: null is true');
if (-1) console.log('#4: negative is true');
if (1) console.log('#5: positive is true');
4. The Ternary Operator
Your Tasks:
Rewrite the if/else statement below using a single line of code with the ternary operator.
In your own words, explain what the += operator does.
let a = 2, b = 3;
let result = `The sum of ${a} and ${b} is `;

if (a + b < 10) {
  result += 'less than 10';
} else {
  result += 'greater than 10';
}

console.log(result);
5. Function Syntax
The getGreeting function is a classic function declaration. Rewrite it in two other common ways: a) As a function expression. b) As an arrow function.

// Original function declaration
function getGreeting(name) {
  return `Hello, ${name}!`;
}

// a) Function expression syntax
// const getGreetingExpression = ...

// b) Arrow function syntax
// const getGreetingArrow = ...

console.log(getGreeting('World'));
6. Objects and this
This exercise involves completing an object that represents a character from The Princess Bride.

Your Tasks:
a) Complete the inigo object by adding a lastName property. b) Update the greeting method to include the lastName in the introduction. c) Complete the getCatchPhrase method. If the person object has numFingers: 6, it should return his famous catchphrase. Otherwise, it should return a generic greeting. d) Bonus: Rewrite the getCatchPhrase method using arrow function syntax and a ternary operator.

const westley = {
  name: 'Westley',
  numFingers: 5
};

const rugen = {
  name: 'Count Rugen',
  numFingers: 6
};

const inigo = {
  firstName: 'Inigo',
  // a) Add a lastName property
  greeting(person) {
    let greeting = `Hello, ${person.name}. My name is ${this.firstName}.`; // b) Update this greeting
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    // c) Complete this method
    return 'Nice to meet you.';
  }
};

inigo.greeting(westley);
inigo.greeting(rugen);
7. Method Chaining
The basketballGame object tracks the score of a game.

Your Tasks:
a) Modify each of the scoring methods (freeThrow, basket, threePointer) so that they can be "chained" together. (Hint: what should each method return?) b) Add a fullTime method that prints the final score. c) Add a fouls property and a method to increment it. Include the foul count in the halfTime and fullTime messages. d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
  score: 0,
  // c) Add a fouls property
  freeThrow() {
    this.score++;
  },
  basket() {
    this.score += 2;
  },
  threePointer() {
    this.score += 3;
  },
  halfTime() {
    console.log(`Halftime score is ${this.score}.`);
  },
  // b) Add a fullTime method
  // c) Add a method to increment fouls
};

// Modify the methods to enable chaining like this:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
8. Iterating Over Objects
Your Tasks:
a) Write a function that takes an object as an argument and uses a for...in loop to access and print each of its properties and values to the console. b) Test your function using the sydney object. c) Create a new object for a different city and test the function again.

const sydney = {
  name: 'Sydney',
  population: 5_121_000,
  state: 'NSW',
  founded: '26 January 1788',
  timezone: 'Australia/Sydney'
};
9. Primitives vs. Reference Types
This exercise explores how JavaScript stores objects and primitives by reference vs. by value.

Your Tasks:
a) Create moreSports equal to teamSports and add new sports to moreSports. b) Create dog2 equal to dog1 and give dog2 a new value. c) Create cat2 equal to cat1 and change cat2's name property. d) Print the original teamSports, dog1, and cat1 variables to the console. Have they changed? Explain why or why not in a comment. e) Refactor the code for moreSports and cat2 to create true copies, so the original variables remain unchanged. (Hint: look up the spread operator ...).

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
10. Constructor Functions vs. Classes
This exercise compares two ways of creating objects in JavaScript.

Your Tasks:
a) Create two new people using the Person constructor function. b) Rewrite the constructor function as a class called PersonClass. c) Create a third person using the PersonClass. d) Add a canDrive method to both the constructor function's prototype and the class. The method should return true if the person's age is 16 or older.

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

// Class Syntax
// b) Rewrite the constructor as a class
Bonus Challenge
If you have time, test your skills with the JS Challenger Rush game: https://www.jschallenger.com/games/rush
