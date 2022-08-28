// Modules and Globals
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// CONFIGURATION
require('dotenv').config();
const app = express();
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

// MIDDLEWARE
app.set('view engine', 'jsx');
app.set('views', `${__dirname}/views/`);
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected'))
  .catch(err => console.log(err));

// ROUTES
app.get('/', (req, res) => {
    res.render('home')
});

// Controllers & Routes
app.use('/places', require('./controllers/places'));

// 404 Page
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`listening on PORT: ${process.env.PORT}`);
  });