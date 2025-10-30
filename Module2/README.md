# M2-L1: HTML Lab

The goal of this lab is to help you familiarize yourself with HTML tags, their properties, and usages. Completing the steps will require searching for answers on the Internet, which is the bread and butter of a software developer’s life.

**TIP:** Try to learn some VS Code keyboard shortcuts as you progress with this exercise—shortcuts can greatly simplify a web developer’s life. 💡

-----

## I. Template and Live Server

The template in the `src` folder contains a skeleton for your website that uses semantic HTML. There are two files, `index.html` and `form.html`, because we'll be creating two separate pages and then linking them together using `<a>` tags. Assets, like images, audio, and video, are in the `assets` directory.

**Steps:**

1.  Open the `src` folder in VS Code and take a look at the template HTML files.
2.  With `index.html` opened, start the **Live Server** extension by clicking the **Go Live** button in the bottom right-hand corner of VS Code:
    \<img width="512" height="58" alt="live-server-icon" src="[https://github.com/user-attachments/assets/6bfe905a-24fe-4f7c-be16-0e2f4e9c6319](https://github.com/user-attachments/assets/6bfe905a-24fe-4f7c-be16-0e2f4e9c6319)" /\>
3.  This should open `http://127.0.0.1:5500/index.html` in your browser.
    1.  Change the above URL to load the `form.html` page, and then click the "Home" link to go back to the index page.

-----

## II. HTML Elements: Metadata

In this section, you'll be editing the `<head>` section of the `index.html` file.

**Steps:**

1.  Add a title using the HTML `<title>` tag.
2.  Add metatags using HTML `<meta>` tags for the following 5 items:
      * `charset`
      * `description`
      * `keywords`
      * `author`
      * `viewport`

-----

## III. HTML Elements: `div`, `span`, `p`, `pre`, `ul`, `li`, `ol`, `article`

In this section, you'll be editing the `<body>` section of the `index.html` file.

**Steps:**

1.  Add 3 `<div>` elements next to each other at the beginning of the body section and put some distinctive content into each. For example:
    ```html
    <div>HTML</div>
    <div>CSS</div>
    <div>JavaScript</div>
    ```
2.  Below the `<div>` elements, add 3 `<span>` elements next to each other and put some distinctive content into each. Observe the difference between block and inline elements.
      * **TIP:** In VS Code, you can highlight your code and press \<kbd\>Ctrl\</kbd\>+\<kbd\>K\</kbd\>+\<kbd\>F\</kbd\> to auto-format it. VS Code won't auto-format invalid code.
3.  Add `<p>` and `<pre>` tags to your HTML body using the content below:
    ```html
    <p>
      p represents paragraph     without preserving      spacing
    </p>
    <pre>
      Text in         a pre element
      is displayed in a fixed-width
      font, and it preserves
      both      spaces and
      line breaks
    </pre>
    ```
    Observe how the `<pre>` tag preserves the structure of the text, while the `<p>` tag collapses spaces and newlines.
4.  Add an unordered list of 4 items to your page using `<ul>` and `<li>` tags.
5.  Add an ordered list of 3 items to your page using `<ol>` and `<li>` tags.
6.  Add a nested list of 2 items inside the last item of either list above.
7.  Wrap all the elements you've created so far with an `<article>` tag.
    ```html
    <article>
        <!-- Content added in previous points -->
    </article>
    ```
8.  Add a page headline: add an `<h1>` tag above your article with any content (e.g., "My HTML Learning Journey").
9.  Add an article headline: add an `<h2>` tag within the `<article>` tag with any content (e.g., "Learning Elements: `div`, `span`, `p`, `pre`, `ul`, `li`, `ol`, `article`"). Consider the difference between the page headline and the article headline.

-----

## IV. HTML Elements: Tables

In this section, you'll continue editing the `<body>` section of the `index.html` file.

**Steps:**

1.  Start by adding another `<article>` below the first one, with a unique `<h2>` tag inside.
2.  Search the web for "HTML table" and copy some example code, such as this from the Mozilla website:
    ```html
    <table>
      <thead>
        <tr>
          <th>First header</th>
          <th>Second header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>First cell - first row</td>
          <td>Second cell - first row</td>
        </tr>
      </tbody>
    </table>
    ```
3.  Create another row by copying a `<tr>` tag and its children below the first row.
4.  By default, tables don't have borders. Add basic styling by copying the code below into the `<head>` section of the page:
    ```html
    <style>
      table, th, td {
        border: 1px solid black;
      }
    </style>
    ```
5.  Add a third cell inside one of the rows. Observe how the table loses its shape.
6.  Each table row must have the same column count. Fix the table by adding the missing `<td>` tag to the other row(s).
7.  Now the header is missing for the third column. Fix this by adding a `colspan="2"` attribute to one of the `<th>` tags to make it span two columns.
8.  Add a third row with 2 columns to the table and add a `rowspan="2"` attribute to one of the `<td>` tags on the second row. Observe what happens.

-----

## V. HTML Elements: `img`, `video`, `audio`

In this section, you'll continue editing the `<body>` section of the `index.html` file.

**Steps:**

1.  Start by adding another `<article>` below the second one, with a unique `<h2>` tag inside.
2.  Add an image to your website using the code below. Add a value for the `alt` attribute, and experiment with the `width` and `height` attributes.
    ```html
    <img src="https://picsum.photos/400/400" alt="A random image" />
    ```
3.  Add a second image using the `html_lab_image.jpg` file from the `assets` folder. Give it an `alt` attribute and make it appear the same size as the first image.
4.  Add a video using the example code below:
    ```html
    <video controls width="250">
      <source src="/assets/flower.webm" type="video/webm">
      Sorry, your browser doesn't support embedded videos.
    </video>
    ```
5.  Add an audio element using the example code below, then add a caption to it using `<figure>` and `<figcaption>`:
    ```html
    <audio controls src="/assets/t-rex-roar.mp3">
      Your browser does not support the <code>audio</code> element.
    </audio>
    ```
6.  Try removing the `controls` attribute and adding the `autoplay` attribute to both the audio and video tags. Observe the changes.

-----

## VI. HTML Elements: Forms

In this section, you'll be editing the `form.html` file.

**Steps:**

1.  Add a form using a `<form>` tag like this:
    ```html
    <form method="POST" action="http://127.0.0.1:5500/form">
    </form>
    ```
2.  Inside the form, add two text inputs—one for a first name and one for a last name.
      * Remember to add a `<label>` for each input.
      * Wrap each input and its label in a `<div>` to stack them.
3.  Add 3 radio buttons using `<input type="radio" ...>`, allowing the user to select their favorite coding language.
      * Remember to label the inputs and add `name` and `value` attributes.
      * Wrap the radio buttons in a `<div>` to separate them from other fields.
4.  Add 3 checkboxes using `<input type="checkbox" ...>`, allowing the user to select vehicle types they own.
      * Remember to label the inputs and add `name` and `value` attributes.
      * Wrap the checkboxes in a `<div>`.
5.  Add a dropdown element to your form using `<select>` and `<option>` tags, allowing the user to choose their car brand.
      * Remember to label the dropdown and add a `value` attribute for each option.
6.  Add a submit button at the end of the form:
    ```html
    <button type="submit">Submit form</button>
    ```

-----

## VII. Adding a Link Between Pages

In this section, you'll link your pages so users can navigate between them.

**Steps:**

1.  Add another `<a>` element inside the `<nav>` tag in both `index.html` and `form.html`, linking to the other page.
2.  Test your links by clicking them to navigate between the two pages.

-----

## VIII. Inspecting the HTML

In this section, you'll use your browser's developer tools to inspect the HTML you've written.

**Steps:**

1.  Open the inspection tool: right-click anywhere on the page and select **Inspect**.
2.  In the **Elements** tab, click on various elements on your website. Observe how they are highlighted on the page as you hover over them in the inspector.
3.  Find the **Styles** subtab and try editing the CSS rules. For example, you can add properties like `margin: 20px;`, `color: blue;`, or `font-size: 24px;`.
