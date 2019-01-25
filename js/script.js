/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

let autoTimer;
let quotes = [
  {
    quote: 'Life is 10% what happens to me and 90% of how I react to it.',
    source: 'Charles Swindoll',
    category: 'motivation'
  },
  {
    quote: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
    source: 'Christopher Columbus',
    category: 'courage'
  },
  {
    quote: 'The two most important days in your life are the day you are born and the day you find out why.',
    source: 'Mark Twain',
    category: 'purpose'
  },
  {
    quote: 'There are no traffic jams along the extra mile',
    source: 'Roger Staubach',
    category: 'motivation'
  },
  {
    quote: 'Get busy living or get busy dying.',
    source: 'Tim Robbins (as Andy Dufresne)',
    citation: 'The Shawshank Redemption',
    year: 1994,
    category: 'movies'
  },
  {
    quote: 'The world is yours...',
    source: 'Tony Montana (as Scarface)',
    citation: 'Scarface',
    year: 1983,
    category: 'movies'
  },
  {
    quote: 'Only greatness pays, forget average.',
    source: 'Othneil Drew',
    year: 2018,
    category: 'success'
  },
  {
    quote: 'Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we\'ve got 24 hours each.',
    source: 'Christopher Rice',
    category: 'life'
  },
  {
    quote: 'Nearly all men can stand adversity, but if you want to test a man\'s character, give him power.',
    source: 'Abraham Lincoln',
    category: 'leadership'
  },
  {
    quote: 'Money can buy you a fine dog, but only love can make him wag his tail.',
    source: 'Kinky Friedman',
    category: 'money'
  }
];


function generateRandomNo(maxNo) {
  return Math.floor(Math.random() * Math.floor(maxNo));
}


// Generator random number then return a quote object
function getRandomQuote() {
  let randomNumber = generateRandomNo(quotes.length);
  return quotes[randomNumber];
}


// Clear the timeout function
function clearAutoQuote() {
  window.clearTimeout(autoTimer);
}


// Create a function that changes the quote automatically after 7 seconds
function autoChangeQuote() {
  clearAutoQuote();
  autoTimer = window.setTimeout(printQuote, 7000);
}


// Generate a random color and set the background
function generateRandomColor() {
  let colorArray = Array();

  for(i = 0; i < 3; i++) {
    let value = generateRandomNo(255);
    colorArray.push(value);
  }

  let colorValue = colorArray.join();

  document.getElementsByTagName('BODY')[0].style.backgroundColor = 'rgb('+ colorValue +')';
}


// Create dynamic HTML string and replace quote-box
function printQuote() {
  let quoteObj = getRandomQuote();

  // Use ternary operators to set quoteCitation, quoteYear, and quoteCat values
  let quoteCitation = quoteObj.hasOwnProperty('citation') ? '<span class="citation">'+ quoteObj.citation +'</span>' : '';

  let quoteYear = quoteObj.hasOwnProperty('year') ? '<span class="year">'+ quoteObj.year +'<span>' : '';

  let quoteCat = quoteObj.hasOwnProperty('category') ? '<span class="category">'+ quoteObj.category +'<span>' : '';

    // Create quote-box HTML string
  let quoteBox = '<div id="quote-box"><p class="quote">'+ quoteObj.quote +'</p><p class="source">'+ quoteObj.source + quoteCitation + quoteYear +'</p>'+ quoteCat +'</div>';

  document.getElementById('quote-box').innerHTML = quoteBox;

  generateRandomColor();

  autoChangeQuote();
}


// On "Show another quote" button click, print a new random quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
