const express = require('express'),
      hbs = require('hbs'),
      fs = require('fs'),
      port = process.env.PORT || 3333;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.');
    }
  });
  next();
});


// Uncomment this function to go into maintenance mode on the site.
// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

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

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects Page',
    greeting: 'These are some of our projects'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'bad request',
    message: 'better take that to the house'
  });
});

app.listen(port, () => {
  console.log(`Zie Server is up on port ${port}`);
});
