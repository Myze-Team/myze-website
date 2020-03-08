require('dotenv').config()
const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

// load user model
const User = require('../models/User')

// load validation helpers
const validator = require('../validation/validator')()

// login form
router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res, next) => {
  // TODO: should we still sanitize the form input? or should we leave that to the frontend
  passport.authenticate('login', (err, user, info) => {
    if (err)
      console.log(err)

    if (info !== undefined) {
      console.log(info.message)
      res.send(info.message)
      return
    }

    // should change this to UUID later
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET)
    res.status(200).send({
      auth: true,
      token: token,
      message: 'Login authenticated successfully',
    })
  })(req, res, next);
})


module.exports = router;
