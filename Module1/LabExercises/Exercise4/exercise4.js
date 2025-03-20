//SECTION 1: Create 4 functions for the 4 main mathematical operations (-,+,/,*). Return the calculated value and then output it to the screen.

//First I defined a variables
let myVariable =2*2
let num1=5
let num2=10
let num3=1

//For the addition operation I defined a function called addNumber. When I called the function, I tested different values for each variable
function addNumber(){
    console.log((myVariable+5)*myVariable);
}
addNumber();



//For the subtraction operation I defined a function called subtractNumber. When I called the function, I tested different values for each variable.
function subtractNumber(){
    console.log(num1-num2);
}
subtractNumber();

//For the multiplication operation I defined a function called multiplyNumber. When I called the function, I printed the product of the two numbers.
function multiplyNumber(){
    console.log(myVariable*num1);
}
multiplyNumber();



//For the division operation I defined a function called divideNumber. When I called the function, I printed the quotient of the two numbers.
function divideNumber(){
    console.log(num1/num3);
}
divideNumber();

//Section 2:
//For this example, I defined a variable called name. When I called the function, I printed "Hello,<name>!".
const name= "John Doe";

function printName(){

console.log("Hello,"+name+"!")
}
printName();


//Alternatively, I can use the function greet() to print the following output: "Hello,Jane Doe!" by passing the parameter "Jane Doe" to the function.
function greet(name){
    console.log("Hello," +name+"!");
}
greet("Jane Doe");