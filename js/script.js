/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Create array of quotes
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
    category: 'movies'
  }
];

let autoTimer;



// Generator random number then return a quote object
function getRandomQuote() {
  // Generate a random number
  function generateRandomNo(maxNo) {
    return Math.floor(Math.random() * Math.floor(maxNo));
  }

  let randomNumber = generateRandomNo(quotes.length);
  return quotes[randomNumber];
}


// Clear the timeout function
function clearAutoQuote() {
  window.clearTimeout(autoTimer);
}


// Create a function that changes the quote automatically after 5 seconds
function autoChangeQuote() {
  clearAutoQuote();
  autoTimer = window.setTimeout(printQuote, 5000);
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

  autoChangeQuote();
}



// On "Show another quote" button click, print a new random quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
