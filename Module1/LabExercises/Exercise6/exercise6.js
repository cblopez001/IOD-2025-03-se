//Section 1: Create a JSON object for a book wih the following properties: title, description, author and # of pages

const book = {title:"Ivanhoe",description:"Sir Walter Scott's historical romance was published in 1819 and has reigned supreme ever since as he epitome of chilvaric novels.",author:"Sir Walter Scott", pageCount:410}

console.log(book);

//SECTION 2: Try printing these object property values in your console individually and via the whole book object.
console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.pageCount);

//SECTION 3: Update the description of the book.
book.description = "Ivanhoe crackles with adventure, from hostage drama inside a besieged castle to a trial by combat to determine the fate of an innocent maiden."
console.log(book.description);
console.log(book);