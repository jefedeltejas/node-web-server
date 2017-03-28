const express = require('express'),
      hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello all o\' y\'all Express lovers!</h1>');
  res.send({
    name: 'Walker',
    likes: [
      'Texas',
      'Rangering',
      'Roundhouse kicks'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'bad request',
    message: 'better take that to the house'
  });
});

app.listen(3333, () => {
  console.log('Starting up zie server on port 3333');
});
