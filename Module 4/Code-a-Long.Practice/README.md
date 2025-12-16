M4-L10.Web-E-Commerce-Code-Along
👨‍🏫 Instructor's Guide: Lab #10 - E-Commerce Page (True Iterative Build)
Class Goal: Today, we're building a dynamic e-commerce page step-by-step. We will start with a basic HTML shell, then iteratively add functionality, testing our code at each stage. Our process will be: write code, see the effect, then write the next piece.

Learning Objectives:

Structure a responsive HTML page with Bootstrap.
Use the defer attribute to load JavaScript efficiently.
Use the HTML <template> tag for reusable components.
Fetch data from a REST API using async/await.
Write JSDoc comments to document functions.
Implement filtering, searching, and sorting by manipulating a local data array.
Use event delegation to handle user interactions.
Step 1: Project Setup & HTML Shell
Goal: Create our project files and a basic HTML structure that includes Bootstrap and our (empty) CSS and JS files.

Create a new folder for your project.
Inside, create three files: index.html, style.css, and app.js.
Add the following code to index.html.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Store</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
    <link rel="stylesheet" href="style.css">

    <script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"></script>

    <script src="app.js" defer></script>
</head>
<body>

    <div class="container my-5">
        <header class="mb-4">
            <h1 class="display-4 text-center">Our E-Commerce Store</h1>
            <p class="lead text-center">Shop our latest products</p>
        </header>

        <main>
            <div id="product-grid" class="row g-4">
                </div>
        </main>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
Instructor's Explanation:

"We have a basic HTML5 structure. We've linked Bootstrap's CSS in the <head> and its JS at the end of the <body>.
"Q: Look at Point 4. Why are we using the defer attribute on our app.js script tag?"
A: "This is a modern alternative to DOMContentLoaded. The defer attribute tells the browser to download the script while it's parsing the HTML, but to wait to execute it until after the HTML parsing is complete. This is efficient and guarantees that when our script runs, all HTML elements (like product-grid) are available for us to select."
"Because we're using defer, we do not need to wrap our app.js code in a DOMContentLoaded event listener."
🧪 Test Your Work: Open index.html in your browser. You should see the title and subtitle. The main area will be empty. Open the developer console (F12) to ensure there are no errors.

Step 2: Add the HTML <template>
Goal: Create the reusable HTML "blueprint" for our product cards.

In index.html, add the following <template> block right after the </main> element (but before the </div> for the container).

        </main> <template id="product-card-template">
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card h-100">
                    <div class="card-header" data-icon></div>

                    <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product Image" data-image>
                    
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title" data-title>Product Title</h5>
                        <h6 class="card-subtitle mb-2 text-muted" data-price>$0.00</h6>
                        <p class="card-text" data-description>Product description...</p>
                    </div>

                    <div class="card-footer mt-auto">
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
        </template>
        </div> </body>
</html>
Instructor's Explanation:

"Q: What does the <template> tag do?"
A: "It's a special tag that holds HTML content. The browser parses this content but does not render it on the page. It's invisible. This makes it a perfect 'blueprint' for us to copy with JavaScript."
"Inside the template, we've designed one single product card using Bootstrap classes."
col-12 col-md-6 col-lg-3: This makes our grid responsive. It's 1 card per row on mobile, 2 on tablets, and 4 on desktops.
card h-100: h-100 means height: 100%. This ensures all cards in a row stretch to be the same height, which looks much cleaner.
data-title, data-price, etc.: These are data- attributes. They are custom selectors we've added to make it easy for our JavaScript to find and populate these specific elements.
🧪 Test Your Work: Refresh index.html. You should see... absolutely no change! This is correct. The template is invisible until we use it.

Step 3: Fetch and Render Products
Goal: Write our first JavaScript functions to fetch data from the API and render it to the page using our template.

Now, open app.js and add the following code.

// Select elements from the DOM
const productGrid = document.getElementById('product-grid');
const productCardTemplate = document.getElementById('product-card-template');

// Store all fetched products in this array
let allProducts = [];

/**
 * Fetches all products from the Fake Store API.
 */
async function fetchProducts() {
    console.log("Fetching products...");
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        
        allProducts = products; // Store them in our global array
        console.log("Products fetched:", allProducts);
        
        renderProducts(allProducts); // Initial render
    } catch (error) {
        console.error("Error fetching products:", error);
        productGrid.innerHTML = '<p class="text-danger text-center">Failed to load products. Please try again later.</p>';
    }
}

/**
 * Renders an array of products to the DOM using the template.
 * @param {Array<object>} products - The array of product objects to render.
 */
function renderProducts(products) {
    console.log("Rendering products:", products);
    // Clear any existing content
    productGrid.innerHTML = ''; 

    // Loop through each product...
    products.forEach(product => {
        // 1. Clone the template
        // We use .content.cloneNode(true) to get a deep copy of the template's content
        const card = productCardTemplate.content.cloneNode(true);

        // 2. Populate the cloned card with product data
        card.querySelector('[data-title]').textContent = product.title;
        card.querySelector('[data-price]').textContent = `$${product.price.toFixed(2)}`;
        card.querySelector('[data-description]').textContent = product.description;
        card.querySelector('[data-image]').src = product.image;
        card.querySelector('[data-image]').alt = product.title; // Good for accessibility!

        // 3. Append the populated card to the grid
        productGrid.appendChild(card);
    });
}

// Initial function call to start the app
fetchProducts();
Instructor's Explanation:

"Because we used defer, our script runs after the DOM is ready. We can immediately select our elements.
fetchProducts:
This is an async function. We use await fetch(...) to pause the function until the API responds.
We use a try...catch block. This is crucial for error handling.
allProducts = products; We save the data to a global array. This is important: we only want to fetch from the API once. All filtering/sorting will use this local allProducts array.
renderProducts:
This function is documented with JSDocs. The /** ... */ block explains what it does and what the @param is.
productCardTemplate.content.cloneNode(true): This is how we copy the content of our invisible template. true means we want a deep clone (all child elements).
"At the very end, we call fetchProducts() to kick everything off."
🧪 Test Your Work: Refresh index.html. You should now see all the product cards load onto the page! You'll notice the descriptions are all different lengths, which looks a bit messy. Let's fix that next.

Step 4: Style the Product Cards (CSS)
Goal: Add CSS only for the elements we can see. Right now, that's the long product description.

Open style.css and add this code.

/* Truncate long descriptions */
.card-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    -webkit-box-orient: vertical;
}
Instructor's Explanation:

"Now that our cards are rendering, we can see the long descriptions. We'll add only the CSS to fix this.
"We're using a technique called line-clamp to limit the product description to 4 lines. This will make our cards look uniform and clean."
🧪 Test Your Work: Refresh the page. The product cards should now look much neater, with all descriptions trimmed to 4 lines. We wrote CSS, and we saw an immediate effect!

Step 5: Add HTML Controls
Goal: Add the HTML for our dropdowns and search bar to index.html.

In index.html, add this block inside <main>, right before <div id="product-grid">.

        <main>
            <div class="row mb-4 g-3 align-items-center">
                <div class="col-md-4">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle w-100" type="button" id="category-dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter by Category
                        </button>
                        <ul class="dropdown-menu w-100" id="category-filter" aria-labelledby="category-dropdown-btn">
                            </ul>
                    </div>
                </div>

                <div class="col-md-4">
                    <input type="search" id="search-input" class="form-control" placeholder="Search by title...">
                </div>

                <div class="col-md-4">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle w-100" type="button" id="sort-dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by...
                        </button>
                        <ul class="dropdown-menu w-100" id="sort-options" aria-labelledby="sort-dropdown-btn">
                            <li><a class="dropdown-item" href="#" data-sort="default">Default</a></li>
                            <li><a class="dropdown-item" href="#" data-sort="price-asc">Price: Low to High</a></li>
                            <li><a class="dropdown-item" href="#" data-sort="price-desc">Price: High to Low</a></li>
                            <li><a class="dropdown-item" href="#" data-sort="title-asc">Title: A to Z</a></li>
                            <li><a class="dropdown-item" href="#" data-sort="title-desc">Title: Z to A</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="product-grid" class="row g-4">
Instructor's Explanation:

"We've added another Bootstrap row to hold our controls.
"The category filter's <ul> is empty. We will populate it from the API in the next step.
"The sort dropdown has hard-coded options with data-sort attributes. We'll use these in our JS to know how to sort."
🧪 Test Your Work: Refresh the page. You should now see the two dropdowns and the search bar above your products. They don't do anything yet, but they are visible.

Step 6: Populate Category Filter & Refactor for init
Goal: Fetch the list of categories from the API and dynamically add them to the "Filter by Category" dropdown. We'll also refactor our JS to handle fetching multiple data sources.

Let's modify app.js.

// ... (keep existing selectors at the top)
const productGrid = document.getElementById('product-grid');
const productCardTemplate = document.getElementById('product-card-template');
// NEW SELECTORS
const categoryFilter = document.getElementById('category-filter');
const categoryDropdownBtn = document.getElementById('category-dropdown-btn');

// ... (keep allProducts array)
let allProducts = [];

// --- NEW: init() function ---
/**
 * Main initialization function to fetch all data
 */
async function init() {
    // Fetch products and categories concurrently
    // Promise.all waits for all promises inside to resolve
    console.log("Initializing app...");
    await Promise.all([
        fetchProducts(),
        fetchCategories()
    ]);
    console.log("Initialization complete.");
}

/**
 * Fetches all products from the Fake Store API.
 */
async function fetchProducts() {
    console.log("Fetching products...");
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        allProducts = await response.json();
        
        console.log("Products fetched:", allProducts);
        renderProducts(allProducts); // Initial render
    } catch (error) {
        console.error("Error fetching products:", error);
        productGrid.innerHTML = '<p class="text-danger text-center">Failed to load products. Please try again later.</p>';
    }
}

// --- NEW: fetchCategories() function ---
/**
 * Fetches all categories from the API and populates the dropdown.
 */
async function fetchCategories() {
    console.log("Fetching categories...");
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const categories = await response.json();
        
        console.log("Categories fetched:", categories);
        
        // Add an "All" option first
        categoryFilter.innerHTML = '<li><a class="dropdown-item" href="#" data-category="all">All Categories</a></li>';
        
        // Add an option for each fetched category
        categories.forEach(category => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.className = 'dropdown-item';
            a.href = '#';
            a.dataset.category = category;
            a.textContent = category;
            li.appendChild(a);
            categoryFilter.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}


/**
 * Renders an array of products to the DOM...
 * @param {Array<object>} products
 */
function renderProducts(products) {
    // ... (This function remains exactly the same as Step 3)
    console.log("Rendering products:", products);
    productGrid.innerHTML = ''; 
    products.forEach(product => {
        const card = productCardTemplate.content.cloneNode(true);
        card.querySelector('[data-title]').textContent = product.title;
        card.querySelector('[data-price]').textContent = `$${product.price.toFixed(2)}`;
        card.querySelector('[data-description]').textContent = product.description;
        card.querySelector('[data-image]').src = product.image;
        card.querySelector('[data-image]').alt = product.title; 
        productGrid.appendChild(card);
    });
}

// --- MODIFIED: Call init() instead of fetchProducts() ---
init();
Instructor's Explanation:

"We've refactored our code significantly.
init() function: We created a new init function.
"Q: Why are we using Promise.all() here?"
A: "This is a performance optimization. It allows us to fetchProducts and fetchCategories at the same time (concurrently). Our app won't proceed until both requests have finished. This is faster than waiting for one to finish before starting the next."
fetchCategories(): This is a new function that hits a different API endpoint (/products/categories) to get just the category names. It then dynamically creates <li> and <a> elements and adds them to our dropdown menu.
"We changed the final line to call init() instead of just fetchProducts()."
🧪 Test Your Work: Refresh the page. Now, when you click the "Filter by Category" dropdown, you should see "All Categories" followed by the list of categories fetched from the API!

Step 7: Implement Filtering (Category & Search)
Goal: Make the category and search controls actually filter the products. We'll introduce a "master" function to update the display.

This is a big update to app.js.

// ... (keep all selectors from Step 6)
const productGrid = document.getElementById('product-grid');
const productCardTemplate = document.getElementById('product-card-template');
const categoryFilter = document.getElementById('category-filter');
const categoryDropdownBtn = document.getElementById('category-dropdown-btn');
// NEW SELECTORS
const searchInput = document.getElementById('search-input');

// ... (keep allProducts array)
let allProducts = [];

// NEW: State variables to track current filters
let currentCategory = 'all';
let currentSearch = '';

/**
 * Main initialization function to fetch all data and set up listeners
 */
async function init() {
    console.log("Initializing app...");
    await Promise.all([
        fetchProducts(),
        fetchCategories()
    ]);
    
    // NEW: Set up event listeners after data is fetched
    setupEventListeners();
    console.log("Initialization complete.");
}

/**
 * Fetches all products from the API.
 */
async function fetchProducts() {
    console.log("Fetching products...");
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        allProducts = await response.json();
        
        console.log("Products fetched:", allProducts);
        // MODIFIED: Call updateDisplay() instead of renderProducts()
        updateDisplay(); 
    } catch (error) {
        // ... (error handling)
    }
}

/**
 * Fetches all categories from the API...
 */
async function fetchCategories() {
    // ... (This function remains exactly the same as Step 6)
    console.log("Fetching categories...");
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const categories = await response.json();
        
        console.log("Categories fetched:", categories);
        
        categoryFilter.innerHTML = '<li><a class="dropdown-item" href="#" data-category="all">All Categories</a></li>';
        
        categories.forEach(category => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.className = 'dropdown-item';
            a.href = '#';
            a.dataset.category = category;
            a.textContent = category;
            li.appendChild(a);
            categoryFilter.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

// --- NEW: setupEventListeners() function ---
/**
 * Sets up all event listeners for controls.
 */
function setupEventListeners() {
    console.log("Setting up event listeners...");
    
    // Category filter listener (using event delegation)
    categoryFilter.addEventListener('click', (e) => {
        e.preventDefault(); // Stop the link from navigating
        
        // Check if the clicked element is a dropdown item
        if (e.target.matches('.dropdown-item')) {
            currentCategory = e.target.dataset.category;
            categoryDropdownBtn.textContent = e.target.textContent; // Update button text
            updateDisplay();
        }
    });

    // Search input listener
    // 'input' event fires on every keystroke
    searchInput.addEventListener('input', () => {
        currentSearch = searchInput.value.toLowerCase();
        updateDisplay();
    });
}

// --- NEW: updateDisplay() function ---
/**
 * Applies all current filters and sorting, then re-renders the products.
 */
function updateDisplay() {
    console.log(`Updating display: Category='${currentCategory}', Search='${currentSearch}'`);
    
    // 1. Start with all products
    let productsToRender = [...allProducts];

    // 2. Apply category filter
    if (currentCategory !== 'all') {
        productsToRender = productsToRender.filter(product => product.category === currentCategory);
    }

    // 3. Apply search filter (on title)
    if (currentSearch) {
        productsToRender = productsToRender.filter(product => 
            product.title.toLowerCase().includes(currentSearch)
        );
    }

    // 4. (Sorting will be added here)

    // 5. Render the final array
    renderProducts(productsToRender);
}


/**
 * Renders an array of products to the DOM...
 * @param {Array<object>} products
 */
function renderProducts(products) {
    console.log("Rendering products:", products.length);
    productGrid.innerHTML = ''; 

    // NEW: Handle no results
    if (products.length === 0) {
        productGrid.innerHTML = '<p class="text-secondary text-center">No products found.</p>';
        return;
    }

    products.forEach(product => {
        // ... (This function's content remains the same)
        const card = productCardTemplate.content.cloneNode(true);
        card.querySelector('[data-title]').textContent = product.title;
        card.querySelector('[data-price]').textContent = `$${product.price.toFixed(2)}`;
        card.querySelector('[data-description]').textContent = product.description;
        card.querySelector('[data-image]').src = product.image;
        card.querySelector('[data-image]').alt = product.title; 
        productGrid.appendChild(card);
    });
}

// --- Call init() ---
init();
Instructor's Explanation:

setupEventListeners():
"Q: For the category filter, I'm adding one listener to the <ul> (categoryFilter), not to each <a> tag. Why?"
A: "This is event delegation. Instead of adding 10 listeners, we add one to the parent. We then use e.target.matches() to see which child was clicked. It's much more efficient and works even for items added dynamically (like our categories)."
The search listener uses the input event, which fires on every single keystroke, giving us real-time search.
updateDisplay():
"This is our most important new function. It's the 'single source of truth' for what's on the page."
It starts with a copy of allProducts (using the [... ] spread syntax).
It then filters that array based on currentCategory and currentSearch.
Finally, it calls renderProducts with the final processed array.
"We also modified fetchProducts to call updateDisplay() instead of renderProducts() directly, and renderProducts now has a 'No products found' message."
🧪 Test Your Work: Refresh the page. Now your category dropdown and search bar should work! Try selecting "jewelery" or typing "jacket" into the search bar. The grid should update instantly.

Step 8: Implement Sorting
Goal: Make the "Sort by..." dropdown functional.

We just need to add a few small pieces to app.js.

// ... (keep all selectors from Step 7)
// NEW SELECTORS
const sortOptions = document.getElementById('sort-options');
const sortDropdownBtn = document.getElementById('sort-dropdown-btn');

// ... (keep allProducts array)
let allProducts = [];

// ... (keep state variables)
let currentCategory = 'all';
let currentSearch = '';
// NEW STATE
let currentSort = 'default';

/**
 * Main initialization function...
 */
async function init() {
    // ... (This function remains the same as Step 7)
    console.log("Initializing app...");
    await Promise.all([
        fetchProducts(),
        fetchCategories()
    ]);
    setupEventListeners();
    console.log("Initialization complete.");
}

/**
 * Fetches all products...
 */
async function fetchProducts() {
    // ... (This function remains the same as Step 7)
    console.log("Fetching products...");
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        allProducts = await response.json();
        console.log("Products fetched:", allProducts);
        updateDisplay(); 
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

/**
 * Fetches all categories...
 */
async function fetchCategories() {
    // ... (This function remains the same as Step 7)
    console.log("Fetching categories...");
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const categories = await response.json();
        console.log("Categories fetched:", categories);
        categoryFilter.innerHTML = '<li><a class="dropdown-item" href="#" data-category="all">All Categories</a></li>';
        categories.forEach(category => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.className = 'dropdown-item';
            a.href = '#';
            a.dataset.category = category;
            a.textContent = category;
            li.appendChild(a);
            categoryFilter.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

/**
 * Sets up all event listeners...
 */
function setupEventListeners() {
    console.log("Setting up event listeners...");
    
    // ... (Category listener remains the same)
    categoryFilter.addEventListener('click', (e) => {
        e.preventDefault(); 
        if (e.target.matches('.dropdown-item')) {
            currentCategory = e.target.dataset.category;
            categoryDropdownBtn.textContent = e.target.textContent; 
            updateDisplay();
        }
    });

    // ... (Search listener remains the same)
    searchInput.addEventListener('input', () => {
        currentSearch = searchInput.value.toLowerCase();
        updateDisplay();
    });

    // --- NEW: Sort options listener ---
    sortOptions.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.matches('.dropdown-item')) {
            currentSort = e.target.dataset.sort;
            sortDropdownBtn.textContent = e.target.textContent; // Update button text
            updateDisplay();
        }
    });
}

/**
 * Applies all current filters and sorting...
 */
function updateDisplay() {
    console.log(`Updating display: Category='${currentCategory}', Search='${currentSearch}', Sort='${currentSort}'`);
    
    let productsToRender = [...allProducts];

    // ... (Category filter remains the same)
    if (currentCategory !== 'all') {
        productsToRender = productsToRender.filter(product => product.category === currentCategory);
    }

    // ... (Search filter remains the same)
    if (currentSearch) {
        productsToRender = productsToRender.filter(product => 
            product.title.toLowerCase().includes(currentSearch)
        );
    }

    // --- NEW: Apply sorting ---
    switch (currentSort) {
        case 'price-asc':
            // For numbers: a - b (ascending)
            productsToRender.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            // For numbers: b - a (descending)
            productsToRender.sort((a, b) => b.price - a.price);
            break;
        case 'title-asc':
            // For strings: localeCompare (ascending)
            productsToRender.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'title-desc':
            // For strings: localeCompare (descending)
            productsToRender.sort((a, b) => b.title.localeCompare(a.title));
            break;
        // 'default' case needs no sorting
    }

    // 5. Render the final array
    renderProducts(productsToRender);
}


/**
 * Renders an array of products...
 * @param {Array<object>} products
 */
function renderProducts(products) {
    // ... (This function remains exactly the same as Step 7)
    console.log("Rendering products:", products.length);
    productGrid.innerHTML = ''; 
    if (products.length === 0) {
        productGrid.innerHTML = '<p class="text-secondary text-center">No products found.</p>';
        return;
    }
    products.forEach(product => {
        const card = productCardTemplate.content.cloneNode(true);
        card.querySelector('[data-title]').textContent = product.title;
        card.querySelector('[data-price]').textContent = `$${product.price.toFixed(2)}`;
        card.querySelector('[data-description]').textContent = product.description;
        card.querySelector('[data-image]').src = product.image;
        card.querySelector('[data-image]').alt = product.title; 
        productGrid.appendChild(card);
    });
}

// --- Call init() ---
init();
Instructor's Explanation:

"We've added a new state variable, currentSort.
"In setupEventListeners, we added a listener for sortOptions (using event delegation again).
"Q: Look at the updateDisplay function. How does sorting with .sort() work?"
A: "The .sort() method sorts an array in place. It takes a comparison function.
For numbers (like price): We return a - b for ascending or b - a for descending. A negative result tells .sort() that 'a' comes first.
For strings (like title): We use .localeCompare(). This is the standard, safe way to sort strings alphabetically, as it correctly handles accents and different languages. a.title.localeCompare(b.title) is ascending."
🧪 Test Your Work: Refresh the page. All controls should now be fully functional! Try combining them: filter by "electronics", search for "laptop", and then sort by "Price: High to Low".

Step 9: (Optional) Add Category Icons & Styles
Goal: Add a final touch by including a custom icon for each product category in the card header. We will add the JS to create the element, and then add the CSS to style it.

Part A: Update JavaScript First, let's modify app.js to add the icon logic.

// ... (all code from Step 8) ...

/**
 * Renders an array of products...
 * @param {Array<object>} products
 */
function renderProducts(products) {
    console.log("Rendering products:", products.length);
    productGrid.innerHTML = ''; 
    if (products.length === 0) {
        productGrid.innerHTML = '<p class="text-secondary text-center">No products found.</p>';
        return;
    }

    products.forEach(product => {
        const card = productCardTemplate.content.cloneNode(true);
        card.querySelector('[data-title]').textContent = product.title;
        card.querySelector('[data-price]').textContent = `$${product.price.toFixed(2)}`;
        card.querySelector('[data-description]').textContent = product.description;
        card.querySelector('[data-image]').src = product.image;
        card.querySelector('[data-image]').alt = product.title; 
        
        // --- NEW: Call the icon function ---
        addCategoryIcon(card, product.category);

        productGrid.appendChild(card);
    });
}

// --- NEW: addCategoryIcon() function ---
/**
 * (Optional) Adds a category-specific icon to the card header.
 * @param {HTMLElement} card - The card element clone.
 * @param {string} category - The product's category string.
 */
function addCategoryIcon(card, category) {
    const iconEl = card.querySelector('[data-icon]');
    if (!iconEl) return; // safety check

    let iconName = '';

    // Pick an icon based on the category
    switch (category) {
        case "electronics":
            iconName = "mdi:laptop";
            break;
        case "jewelery":
            iconName = "mdi:diamond-stone";
            break;
        case "men's clothing":
            iconName = "mdi:tshirt-crew";
            break;
        case "women's clothing":
            iconName = "mdi:lipstick";
            break;
        default:
            iconName = "mdi:tag";
    }
    
    // Use the <iconify-icon> custom element
    iconEl.innerHTML = `<iconify-icon icon="${iconName}" class="category-icon"></iconify-icon> ${category}`;
}


// --- Call init() ---
init();
Part B: Update CSS "Now that our JavaScript is adding content to the .card-header and creating elements with the class .category-icon, now we can add the CSS to style them and see an immediate effect."

Open style.css and add the following new rules.

/* ... (keep the .card-text rule from Step 4) ... */

/* Style for our optional category icon */
.category-icon {
    font-size: 1.2rem;
    vertical-align: middle;
    margin-right: 8px;
    color: #6c757d; /* Bootstrap's 'text-muted' color */
}

.card-header {
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: capitalize;
    color: #6c757d;
}
Instructor's Explanation:

"In renderProducts, we now call a new helper function, addCategoryIcon.
"This function uses a switch statement to pick an icon name from the Iconify library based on the product's category.
"It then sets the innerHTML of our [data-icon] placeholder (the card-header).
"Because those elements are now visible on the page, we can go to style.css and add the rules for .category-icon and .card-header to make them look good."
🧪 Test Your Work: Refresh the page. Your cards should now have a fully styled header with a unique icon and the category name! This completes the project.

Final Code for Review
index.html (Final)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Store</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"></script>
    <script src="app.js" defer></script>
</head>
<body>

    <div class="container my-5">
        <header class="mb-4">
            <h1 class="display-4 text-center">Our E-Commerce Store</h1>
            <p class="lead text-center">Shop our latest products</p>
        </header>

        <main>
            <div class="row mb-4 g-3 align-items-center">
                <div class="col-md-4">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle w-100" type="button" id="category-dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter by Category
                        </button>
                        <ul class="dropdown-menu w-100" id="category-filter" aria-labelledby="category-dropdown-btn">
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <input type="search" id="search-input" class="form-control" placeholder="Search by title...">
                </div>
                <div class="col-md-4">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle w-100" type="button" id="sort-dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by...
                        </button>
                        <ul class="dropdown-menu w-100" id="sort-options" aria-labelledby="sort-dropdown-btn">
                            <li><a class="dropdown-item" href="#" data-sort="default">Default</a></li>
                            <li><a class="dropdown-item" href="#" data-sort="price-asc">Price: Low to High</a></li>
                            <li><a class="dropdown-item" href="#" data-sort="price-desc">Price: High to Low</a></li>
                            <li><a class="dropdown-item" href="#" data-sort="title-asc">Title: A to Z</a></li>
                            <li><a class="dropdown-item" href="#" data-sort="title-desc">Title: Z to A</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="product-grid" class="row g-4">
            </div>
        </main>

        <template id="product-card-template">
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card h-100">
                    <div class="card-header" data-icon></div>
                    <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product Image" data-image>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title" data-title>Product Title</h5>
                        <h6 class="card-subtitle mb-2 text-muted" data-price>$0.00</h6>
                        <p class="card-text" data-description>Product description...</p>
                    </div>
                    <div class="card-footer mt-auto">
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
        </template>

    </div> 

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
style.css (Final)
/* Truncate long descriptions */
.card-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    -webkit-box-orient: vertical;
}

/* Style for our optional category icon */
.category-icon {
    font-size: 1.2rem;
    vertical-align: middle;
    margin-right: 8px;
    color: #6c757d; /* Bootstrap's 'text-muted' color */
}

.card-header {
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: capitalize;
    color: #6c757d;
}
app.js (Final)
// Select elements from the DOM
const productGrid = document.getElementById('product-grid');
const productCardTemplate = document.getElementById('product-card-template');
const categoryFilter = document.getElementById('category-filter');
const categoryDropdownBtn = document.getElementById('category-dropdown-btn');
const searchInput = document.getElementById('search-input');
const sortOptions = document.getElementById('sort-options');
const sortDropdownBtn = document.getElementById('sort-dropdown-btn');

// Store all fetched products
let allProducts = [];

// Store current filter/sort state
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'default';

/**
 * Main initialization function to fetch all data and set up listeners
 */
async function init() {
    console.log("Initializing app...");
    // Fetch products and categories concurrently
    await Promise.all([
        fetchProducts(),
        fetchCategories()
    ]);
    
    // Set up event listeners after data is fetched
    setupEventListeners();
    console.log("Initialization complete.");
}

/**
 * Fetches all products from the Fake Store API.
 */
async function fetchProducts() {
    console.log("Fetching products...");
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        allProducts = await response.json();
        
        console.log("Products fetched:", allProducts);
        updateDisplay(); // Initial render
    } catch (error) {
        console.error("Error fetching products:", error);
        productGrid.innerHTML = '<p class="text-danger text-center">Failed to load products. Please try again later.</p>';
    }
}

/**
 * Fetches all categories from the API and populates the dropdown.
 */
async function fetchCategories() {
    console.log("Fetching categories...");
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const categories = await response.json();
        
        console.log("Categories fetched:", categories);
        
        // Add an "All" option first
        categoryFilter.innerHTML = '<li><a class="dropdown-item" href="#" data-category="all">All Categories</a></li>';
        
        // Add an option for each fetched category
        categories.forEach(category => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.className = 'dropdown-item';
            a.href = '#';
            a.dataset.category = category;
            a.textContent = category;
            li.appendChild(a);
            categoryFilter.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

/**
 * Sets up all event listeners for controls.
 */
function setupEventListeners() {
    console.log("Setting up event listeners...");
    
    // Category filter listener (using event delegation)
    categoryFilter.addEventListener('click', (e) => {
        e.preventDefault(); // Stop the link from navigating
        
        // Check if the clicked element is a dropdown item
        if (e.target.matches('.dropdown-item')) {
            currentCategory = e.target.dataset.category;
            categoryDropdownBtn.textContent = e.target.textContent; // Update button text
            updateDisplay();
        }
    });

    // Search input listener
    // 'input' event fires on every keystroke
    searchInput.addEventListener('input', () => {
        currentSearch = searchInput.value.toLowerCase();
        updateDisplay();
    });

    // Sort options listener (using event delegation)
    sortOptions.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.matches('.dropdown-item')) {
            currentSort = e.target.dataset.sort;
            sortDropdownBtn.textContent = e.target.textContent; // Update button text
            updateDisplay();
        }
    });
}

/**
 * Applies all current filters and sorting, then re-renders the products.
 */
function updateDisplay() {
    console.log(`Updating display: Category='${currentCategory}', Search='${currentSearch}', Sort='${currentSort}'`);
    
    // 1. Start with all products
    let productsToRender = [...allProducts];

    // 2. Apply category filter
    if (currentCategory !== 'all') {
        productsToRender = productsToRender.filter(product => product.category === currentCategory);
    }

    // 3. Apply search filter (on title)
    if (currentSearch) {
        productsToRender = productsToRender.filter(product => 
            product.title.toLowerCase().includes(currentSearch)
        );
    }

    // 4. Apply sorting
    switch (currentSort) {
        case 'price-asc':
            // For numbers: a - b (ascending)
            productsToRender.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            // For numbers: b - a (descending)
            productsToRender.sort((a, b) => b.price - a.price);
            break;
        case 'title-asc':
            // For strings: localeCompare (ascending)
            productsToRender.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'title-desc':
            // For strings: localeCompare (descending)
            productsToRender.sort((a, b) => b.title.localeCompare(a.title));
            break;
        // 'default' case needs no sorting
    }

    // 5. Render the final array
    renderProducts(productsToRender);
}

/**
 * Renders an array of products to the DOM using the template.
 * @param {Array<object>} products - The array of product objects to render.
 */
function renderProducts(products) {
    console.log("Rendering products:", products.length);
    // Clear any existing content
    productGrid.innerHTML = ''; 

    // Handle no results
    if (products.length === 0) {
        productGrid.innerHTML = '<p class="text-secondary text-center">No products found.</p>';
        return;
    }

    // Loop through each product...
    products.forEach(product => {
        // 1. Clone the template
        const card = productCardTemplate.content.cloneNode(true);

        // 2. Populate the cloned card with product data
        card.querySelector('[data-title]').textContent = product.title;
        card.querySelector('[data-price]').textContent = `$${product.price.toFixed(2)}`;
        card.querySelector('[data-description]').textContent = product.description;
        card.querySelector('[data-image]').src = product.image;
        card.querySelector('[data-image]').alt = product.title; // Good for accessibility!
        
        // (Optional) Add the category icon
        addCategoryIcon(card, product.category);

        // 3. Append the populated card to the grid
        productGrid.appendChild(card);
    });
}

/**
 * (Optional) Adds a category-specific icon to the card header.
 * @param {HTMLElement} card - The card element clone.
 * @param {string} category - The product's category string.
 */
function addCategoryIcon(card, category) {
    const iconEl = card.querySelector('[data-icon]');
    if (!iconEl) return; // safety check

    let iconName = '';

    // Pick an icon based on the category
    switch (category) {
        case "electronics":
            iconName = "mdi:laptop";
            break;
        case "jewelery":
            iconName = "mdi:diamond-stone";
            break;
        case "men's clothing":
            iconName = "mdi:tshirt-crew";
            break;
        case "women's clothing":
            iconName = "mdi:lipstick";
            break;
        default:
            iconName = "mdi:tag";
    }
    
    // Use the <iconify-icon> custom element
    iconEl.innerHTML = `<iconify-icon icon="${iconName}" class="category-icon"></iconify-icon> ${category}`;
}


// Run the app
init();
