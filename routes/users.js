require('dotenv').config()
const router = require('express').Router()
const bcrypt = require('bcryptjs')

// load user model
const User = require('../models/User')

// load validation helpers
const validator = require('../validation/validator')

// new user form (GET)
router.get('/new', (req, res) => {
  res.render('register', { message: req.flash('info') })
})

// create user (POST)
router.post('/', (req, res) => {
  const { errors, isValid } = validator.validateRegisterData(req.body)

  if (!isValid)
    return res.status(400).json(errors)

  User.findOne({ email: req.body.email }).then(user => {
    // check for uniqueness
    if (user)
      return res.status(400).json({ email: 'Email already exists' })
    else {
      // create a new object to save later
      const newUser = new User({
        email: req.body.name,
        password: req.body.password,
      })

      // generate salted password hash
      // we only store the hash, never the plain-text password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
      })
    }
  })
})

module.exports = router;
