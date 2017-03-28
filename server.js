const express = require('express'),
      hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Zie frickin homez page',
    welcomeMessage: 'Welcome Valued Express.js Customer'
  });
  // res.send('<h1>Hello all o\' y\'all Express lovers!</h1>');
  // res.send({
  //   name: 'Walker',
  //   likes: [
  //     'Texas',
  //     'Rangering',
  //     'Roundhouse kicks'
  //   ]
  // });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
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
