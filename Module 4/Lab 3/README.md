M4-L3.Web-Templates
Exercise 1
Modify the addCard function from the previous slide so that you can pass content for the card dynamically.

Exercise 2
Call addCard repeatedly so that your cards are automatically generated based on data from an array. This way you will create as many cards as you need to display all the data in the array.

Use the following array:

const data = [
  { name: 'bob', age: 23 },
  { name: 'alice', age: 39 },
];
Exercise 3
Populate the page dynamically, by generating an artist profile card which includes cards representing the items in an artist's portfolio.

Use the following object:

const artist = {
  name: 'Van Gogh',
  portfolio: [
    {
      title: 'portrait',
      url: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image',
    },
    {
      title: 'sky',
      url: 'https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg',
    },
  ],
};
Extension: make an array of artists, all with multiple portfolio items.
