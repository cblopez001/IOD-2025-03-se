M3-L2.JavaScript-Intermediate
Module 3 Lab 2: Intermediate JavaScript
Welcome to the Intermediate JavaScript Lab! Your goal is to complete the 10 functions in the lab.js file to solve a variety of challenges.

This lab is set up with an autograding test file. As you complete each function, you can run the tests locally to check your work before submitting.

Submission Instructions
Follow these steps to complete and submit your work.

Create a dev Branch: Open your terminal in the project folder and run git checkout -b dev to create and switch to a new branch for your work.
Complete the Lab: Edit the lab.js file to complete all the functions as described below.
Test Your Work: Run npm test in your terminal to see which exercises are passing and which need more work.
Add and Commit: When you are ready, stage and commit your changes with the commands git add . and git commit -m "Complete lab 2 exercises".
Push Your Branch: Push your work to your remote repository with git push -u origin dev.
Open a Pull Request: On your GitHub repository page, open a pull request to merge your dev branch into your main branch.
Lab Exercises
1. Capitalize Words
Complete the function capitalizeWords(str) to take a string and return it with the first letter of each word capitalized.

2. Truncate String
Complete the function truncate(str, maxLength) to cut off a string at maxLength and append an ellipsis (...) if it's too long. You must use a ternary operator for this task.

3. Array Manipulation
The arrayManipulation() function takes a starting array. You must perform a series of manipulations—adding items to the beginning and end, sorting it, and replacing the middle element—before returning the final, modified array.

4. Camel Case Conversion
Complete camelCase(cssProp) to convert a dash-separated string like 'margin-left' into a camel-cased string like 'marginLeft'.

5. Floating-Point Precision
JavaScript's handling of decimal math can lead to small errors. Complete the function currencyOperation(float1, float2, operation, numDecimals) to safely perform basic arithmetic (+, -, *, /) on decimal numbers, returning a result rounded to the specified number of decimal places.

6. Find Unique Values
Complete the function unique(duplicatesArray) to take an array that contains duplicate values and return a new array containing only the unique values.

7. Advanced Array Methods
The processBooks(books) function takes an array of book objects. You must use the map, filter, and find methods to perform a series of data transformations and return an object containing the results.

8. The Map Object
Complete the function managePhoneBook(phoneBookABC, phoneBookDEF, newCarolineNumber) to work with JavaScript Map objects. It should combine two phone books, update a contact, and return a map of all unique contacts.

9. Working with Object Data
The processSalaries(salaries) function takes an object where keys are names and values are salaries. It should return an object containing the total of all salaries and the name of the highest earner.

10. The Date Object
Complete the processDate(date) function to perform several calculations based on a given Date object, such as finding the total minutes passed in the day and calculating the days between two dates.

Starter Code (lab.js)
This is the file you will edit.
