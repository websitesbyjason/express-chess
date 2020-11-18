const express = require('express');

// morgan middleware
const morgan = require('morgan');

// express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middleware

app.use ((req, res, next) => {
  console.log('new request made');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.use ((req, res, next) => {
  console.log('in the next middleware');
  next();
});

// my routes
app.get('/', (req, res) => {
  const blogs = [
    { title: 'Just a blog', snippet: 'Lorem ipsum' },
    { title: 'Life in the Fast lane', snippet: 'Lorem ipsum' },
    { title: 'Hoes in different area codes', snippet: 'Lorem ipsum' }
  ];
  res.render('index', { title: 'Welcome to my blog', blogs}) ;
}); 

app.get ('/about', (req, res) => {
  res.render('about', { title: 'About this blog'});
});

app.get ('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog'});
});

// 404 pages
app.use((req, res) => {
  res.status(404).render('404', { title: 'NO Bueno'});
});
