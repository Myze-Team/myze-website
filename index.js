require('dotenv').config()
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const path = require('path')
const app = express()

// set ejs view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

// json body parser
app.use(express.json())

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// serve static files
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.render('landing')
})

app.get('/lmao', (req, res) => {
  req.flash('error_msg', 'cool')
  res.redirect('/users/new')
})

/*
app.get('*', (req, res) => {
  res.redirect('/')
})
*/

app.use('/users', require('./routes/users.js'));

// listen on port
const port = process.env.PORT || 5000

// connect to MongoDB
// supply cluster and credentials
mongoose.connect('mongodb+srv://'
  + process.env.MONGO_DB_USER + ':'
  + process.env.MONGO_DB_PASS + '@'
  + process.env.MONGO_DB_CLUSTER
  + '.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true },
  () => {
    app.listen(port, () => {
      console.log('App is listening on port ' + port)
    })
  }
)
