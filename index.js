require('dotenv').config()
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const path = require('path')
const passport = require('passport')
const app = express()

require('./config/passport')

// set ejs view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

// json body parser
app.use(express.json())
app.use(express.urlencoded())

// passport middleware
app.use(passport.initialize())

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

// link routes
app.use('/users', require('./routes/users.js'))
app.use('/login', require('./routes/auth.js'))
app.get('/testauth', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err)
      console.log(err)

    if (info !== undefined) {
      console.log(info.message)
      res.send(info.message)
      return
    }

    res.status(200).send({
      auth: true,
      message: 'Authenticated user. You are currently logged in as ' + user.email,
    })
  })(req, res, next)
})

// listen on port
const port = process.env.PORT || 5000

// connect to MongoDB
// supply cluster and credentials
mongoose.connect('mongodb+srv://'
  + process.env.MONGO_DB_USER + ':'
  + process.env.MONGO_DB_PASS + '@'
  + process.env.MONGO_DB_CLUSTER + '.mongodb.net/'
  + process.env.MONGO_DB_DATABASE
  + '?retryWrites=true&w=majority',
  { useNewUrlParser: true })
  .then(
  () => {
    app.listen(port, () => {
      console.log('App is listening on port ' + port)
    })
  })
  .catch(err => console.log(err))
