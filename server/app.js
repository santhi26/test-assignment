const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const app = express();
const port = 3000;

// Array to store quotes
let quotes = [
  { id: 1, text: "Be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { id: 2, text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
  { id: 3, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
];

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Route to get number of quotes available
app.get('/', (req, res) => {
  res.send(`There are ${quotes.length} quotes available.`);
});

// Route to get all quotes
app.get('/quotes', (req, res) => {
  res.json(quotes);
});

// Route to create a new quote
app.post('/quotes', (req, res) => {
  const newQuote = req.body;
  const nextId = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 1;
  newQuote.id = nextId;
  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

// Route to get a random quote
app.get('/quotes/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

// Route to get a quote by id
app.get('/quotes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const quote = quotes.find(q => q.id === id);
  if (quote) {
    res.json(quote);
  } else {
    res.status(404).json({ error: "Quote not found." });
  }
});

// Serve static client files
app.use(express.static(path.resolve(__dirname, 'client')))


// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});