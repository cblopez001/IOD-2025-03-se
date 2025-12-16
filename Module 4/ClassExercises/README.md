Module 4: Practice Exercises
Use these exercises to self-evaluate your understanding of the concepts in Module 4, from design and UI frameworks to asynchronous JavaScript.

Exercise 1: From Figma to CSS
Topic: Design-to-Code Translation

A designer hands you a spec from Figma for a primary button. The properties are:

Background Color: #0d6efd
Text Color: #ffffff
Padding: 8px (top/bottom) and 16px (left/right)
Border Radius: 6px
Border: None
Write a single CSS class named .btn-primary that implements these styles.

Exercise 2: Bootstrap Grid
Topic: Bootstrap

Write the HTML (using Bootstrap 5 classes) to create a responsive layout that meets these requirements:

It should contain three
elements.
On mobile screens (extra small), the divs should stack vertically (each taking up 100% of the width).
On tablet screens (medium) and larger, the divs should be arranged in three equal-width columns.
Exercise 3: Find the Bug (Google Fonts)
Topic: Google Fonts

A developer is trying to use the "Roboto" font (regular 400 and bold 700 weights) from Google Fonts, but it's not working. Find the two mistakes in their tag in the HTML .

<!-- Broken Code -->
<link
  href="https://fonts.googleapis.com?family=Roboto:wght@400,700"
  rel="stylesheet"
/>
Exercise 4: Using Icons
Topic: Icon Libraries (Iconify)

Write the single HTML tag needed to display a "shopping cart" icon using the Iconify library.

Hint: You can use the heroicons set. The icon name would be heroicons:shopping-cart.
Exercise 5: fetch with .then()
Topic: Asynchronous JavaScript (fetch)

Write a JavaScript function named logUserEmail that uses the fetch API to get data from https://jsonplaceholder.typicode.com/users/1. After the data is fetched, it should log only the user's email to the console. (Use the .then() syntax).

Exercise 6: async/await with Axios
Topic: async/await and Axios

Refactor the function from Exercise 5 to do the following:

Use async/await syntax instead of .then().
Use the axios library instead of fetch.
The function should be named getUserEmail and should return the email string instead of logging it.
Exercise 7: Chart.js Data Structure
Topic: Chart.js

You want to create a simple Doughnut chart using Chart.js to show the results of a "Favorite Pet" poll. The results are:

Cats: 12
Dogs: 19
Birds: 3
Write the complete JavaScript data object that would be passed to the Chart.js constructor to create this chart. (You don't need to write the config or new Chart() code, just the data object literal).

Exercise 8: The "Why" of Frameworks
Topic: JavaScript Frameworks (Conceptual)

In 2-3 sentences, explain the main problem that JavaScript frameworks like React, Angular, and Vue are designed to solve. What do they help you avoid doing?

Hint: Think about document.getElementById() and managing application state.
Exercise 9: Git Branching Strategy
Topic: Git (Conceptual)

You are asked to add a new, complex "User Login" feature to your project. Why should you create a new feature branch (e.g., feature/login) for this work instead of committing all your changes directly to the main branch? Give two reasons.

Exercise 10: Find the Bug (Async Error Handling)
Topic: async/await Error Handling

The following async function is intended to fetch a post from an API. However, if the network request fails (e.g., the URL is wrong or the server is down), the entire application crashes with an "unhandled promise rejection" error.

How would you modify this function to gracefully handle potential errors and simply log the error message to the console instead?

// Broken Code
async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  console.log(data);
  return data;
}
Click to View Answers
