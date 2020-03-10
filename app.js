const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const flash = require('connect-flash')
const session = require('express-session')
const path = require('path')
const app = express()


//
// ---- MIDDLEWARE
//


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


//
// ---- ROUTES
//

// serve static files
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.render('landing')
})
app.use('/users', require('./routes/users'))
app.use('/login', require('./routes/login'))

// test routes
app.use('/testauth', require('./firebase/authenticate'))
app.get('/testauth', (req, res) => {
  res.status(200).send({
    auth: true,
    message: 'Authenticated user. You are currently logged in as ' + res.locals.uid,
  })
})
app.get('/lmao', (req, res) => {
  req.flash('error_msg', 'cool')
  res.redirect('/users/new')
})


// export the express app with the attatched middleware
// and routes
//
// import the app where needed to create server instances
module.exports = app
