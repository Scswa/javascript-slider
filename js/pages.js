/* jshint esversion: 6 */

// alert("Javascript is working and creating this annoying pop up!!");
// "alert" is a test to check that the html and Javascript are connected

// When I click the next button
// Show the next page

// When I click the previous button
// Show the previous page

// When I click the random button
// Show a random page

// Each page should show a different background color, circle color & content

// When I press a key
// Show the next or previous page

// Step 1: Add the content for our pages
// To create a list use square brackets []
// To create an object use curly brackets[]
// title: "Description"

// To create a list of ojects use both [{}]
const pages = [{
    content: "from Kent who is short but talented",
    background: "linear-gradient(145deg, rgba(56, 255, 168, 1) 10%, rgba(66, 222, 177, 1) 20%, rgba(71, 226, 221, 1) 30%, rgba(48, 143, 190, 1) 40%, rgba(27, 133, 212, 1) 50%, rgba(62, 167, 242, 1) 60%, rgba(130, 196, 244, 1) 70%, rgba(189, 189, 189, 1) 80%, rgba(115, 115, 115, 1) 90%, rgba(89, 89, 89, 1) 100%)",
    circle: "#76ECAC"
  },
  {
    content: "someone who enjoys sports, photography, movies, music and singing",
    background: "linear-gradient(135deg, rgba(29,255,190,1) 25%, rgba(50,226,149,1) 50%, rgba(100,200,171,1) 75%, rgba(0,74,53,1) 100%)",
    circle: "#ffffff"
  },
  {
    content: "availible for work",
    background: "linear-gradient(135deg, rgba(24,149,233,1) 25%, rgba(29,132,172,1) 50%, rgba(36,85,154,1) 75%, rgba(0,33,80,1) 100%)",
    circle: "#949494"
  },
  {
    content: `letting you <a href="cv.pdf"`,
    background: "linear-gradient(135deg, rgba(227,227,227,1) 25%, rgba(145,145,145,1) 50%, rgba(93,93,93,1) 75%, rgba(62,62,62,1) 100%)",
    circle: "#3799E7"
  }
];

// Step 2: Pick the tags we want to use in html and save the in constants

const bodyTag = document.querySelector("body");
const circleTag = document.querySelector(".circle");
// select each button individually using the fa classes. Call the constants the following: nextTag, previousTag, randomTag
// select the h2 and name the constant output
const nextTag = document.querySelector(".next");
const randomTag = document.querySelector(".random");
const previousTag = document.querySelector(".previous");
const h2Tag = document.querySelector("h2");

// Step 3: We need to know what page we are on in order to change it. - so we need a way to track this.
let pageNumber = 0;

// CONSTANT!

// Step 4: Create an action that increases the page number
const next = function() {
  pageNumber = pageNumber + 1;
  // We only have 4 pages - so we don't want to be able to increase the page number  to 5
  // pages.length will print out the number of pages in our list. Currently this is 4. However we start counting from 0 in programming so we -1
  if (pageNumber > pages.length - 1) {
    // Set back to page 1
    pageNumber = 0;
  }
};

// Step 5: Create an action that decreases the page page number
const previous = function() {
  pageNumber = pageNumber - 1;
  // If page number gets to 0, change the page number to the last page in our list
  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
};

// Step 7: Create an action that generates a random number
const random = function() {
  //  Create a random whole number using math.random() - this creates a number between 0 & 1 that has decimal places
  // So we multiply it by the number of pages we have - pages.length
  // We want a whole number sp we wrap Math.random * pages.length in Math.floor
  pageNumber = Math.floor(Math.random() * pages.length);
};

// Step 10: Update the content on our page from the content on the pages list
const updatePage = function() {
  // update the content in our body
  h2Tag.innerHTML = pages[pageNumber].content;
  // update the circle background
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.background = pages[pageNumber].background;
};


// EVENT LISTENERS

// Step 6: Attatch an event listener to the next button & call the next function. Now the next button should increase the page number.
nextTag.addEventListener("click", function() {
  next();
  console.log(pageNumber);
  updatePage();
});

// Step 6: Attatch an event listener to the previous button & call the next function. Now the previous button should decrease the page number.
previousTag.addEventListener("click", function() {
  previous();
  console.log(pageNumber);
  updatePage();
});

// Step 9: Attatch an event listener to the random button & call the next function. Now the random button should select a random page number.
randomTag.addEventListener("click", function() {
  random();
  console.log(pageNumber);
  updatePage();
});