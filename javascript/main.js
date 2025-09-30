var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var author = document.getElementById("author");

var quotes = [{text:"Be yourself; everyone else is already taken .",author:"Oscar Wilde"},
              {text:"Two things are infinite: the universe and human stupidity, and I'm not sure about the universe .",author:"Albert Einstein"},
              {text:"Don't look back. You're not going that way .",author:"John Muir"},
              {text:"Opportunities don't happen. You create them .",author:"Chris Grosser"},
              {text:"There are no secrets to success. It is the result of preparation, hard work, and learning from failure .",author:"Colin Powell"},
              {text:"Success usually comes to those who are too busy to be looking for it .",author:"Henry David Thoreau"},
              {text:"It is better to be hated for what you are than to be loved for what you are not .",author:"Andre Gide"},
              {text:"Happiness is not something ready-made. It comes from your own actions .",author:"Dalai Lama"},
              {text:"Believe you can and you're halfway there .",author:"Theodore Roosevelt"},
              {text:"The only way to do great work is to love what you do .",author:"Steve Jobs"}
];

var lastRandomIndex;
function showQuote() {
  do {
    var randomIndex = Math.floor(Math.random() * quotes.length); 
  } while (randomIndex === lastRandomIndex); 
  lastRandomIndex = randomIndex;
  quote.innerHTML = "“ " + quotes[randomIndex].text + " ”";
  author.innerHTML = "- " + quotes[randomIndex].author;
}

btn.addEventListener("click", showQuote);