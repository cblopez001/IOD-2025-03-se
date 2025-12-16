M3-L3.JavaScript-Advanced
Module 3 Lab 3: Advanced JavaScript
Welcome to the Advanced JavaScript Lab! This lab will test your understanding of complex concepts like closures, asynchronous programming, prototypes, and classes. Your goal is to complete the functions in the lab.js file.

This lab is set up with an autograding test file. As you complete each function, you can run the tests locally to check your work.

Submission Instructions
Create a dev Branch: Run git checkout -b dev to create and switch to a new branch for your work.
Complete the Lab: Edit the lab.js file to complete all the functions as described below.
Test Your Work: Run npm test in your terminal to see which exercises are passing.
Add and Commit: Stage and commit your changes with git add . and git commit -m "Complete advanced JS lab".
Push Your Branch: Push your work to your remote repository with git push -u origin dev.
Open a Pull Request: On your GitHub repository page, open a pull request to merge your dev branch into your main branch.
Lab Exercises
1. Closures: makeCounter
Complete the makeCounter(startFrom, incrementBy) function. It should return a new function that acts as a counter. Each time the returned function is called, it should increment its internal count by incrementBy and return the new value. Each counter created must be independent.

2. Asynchronous JS: delayMsg
Complete the delayMsg(msg) function. This function will be called by setTimeout. You must also determine the correct order in which the messages will print and return that order as an array of strings from the getOrder() function.

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
3. Asynchronous JS: debounce
Complete the debounce(func, ms) decorator function. It should take a function and a delay in milliseconds. The returned function, when called, should only execute the original func after ms milliseconds of inactivity. If it's called again within the delay period, the timer should reset.

4. Asynchronous JS: printFibonacci
Complete the printFibonacci(limit) function. It should use setInterval to print the next number in the Fibonacci sequence every second, stopping after it has printed limit numbers.

5. this Keyword: car
The car object's description method fails when called from setTimeout. Complete the fixCar() function to create a new version of the method, boundDescription, that is permanently bound to the car object and will work correctly inside setTimeout.

6. Prototypes: delay
Add a delay(ms) method to the Function.prototype. This new method should return a delayed version of the original function that will execute after ms milliseconds. The delayed function must be able to accept any number of arguments.

7. Classes and Inheritance: PrecisionClock & AlarmClock
Extend the DigitalClock class.

Create a PrecisionClock that inherits from DigitalClock and accepts a precision parameter (the tick interval in ms).
Create an AlarmClock that inherits from DigitalClock and accepts a wakeupTime (e.g., '08:30'). It should stop ticking and log "Wake Up!" when the current time matches the wakeup time.
8. Decorator Functions: validateStringArgs
Complete the validateStringArgs(fn) decorator. It should take a function fn and return a new function that checks if all of its arguments are strings. If any argument is not a string, it should throw a TypeError.

9. Promises: randomDelay
Complete the randomDelay() function. It must return a promise that resolves or rejects after a random delay between 1 and 10 seconds. The promise should resolve if the random delay is an even number and reject if it is an odd number.

10. async/await: fetchURLDataAsync
Rewrite the promise-based fetchURLData function using async/await syntax. Your new function, fetchURLDataAsync, should perform the same task: fetch data from a URL, check for a successful HTTP status, and return the JSON data.
