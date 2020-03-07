require('dotenv').config()
const db = require('mongoose').connection
const router = require('express').Router()
const bcrypt = require('bcryptjs')

// load user model
const User = require('../models/User')

// load validation helpers
const validator = require('../validation/validator')()

// new user form (GET)
router.get('/new', (req, res) => {
  res.render('register', { message: req.flash('info') })
})

// create user (POST)
// expects body to contain the following fields
//
// email: <registration email>
// password: <password>
// passwordConfirm: <password>
//
router.post('/', (req, res) => {
  console.log("VAL" + validator)
  const { errors, isValid } = validator.validateRegisterData(req.body)

  if (!isValid)
    return res.status(400).json(errors)

  User.findOne({ email: req.body.email }).then(user => {
    // check for uniqueness
    if (user)
      return res.status(400).json({ email: 'Email already exists' })
    else {
      // create a new object with the unhashed password
      const newUser = new User({
        email: req.body.email,
        passwordHash: req.body.password,
      })

      console.log('Creating User ' + newUser.password)
      // generate salted password hash
      // we only store the hash, never the plain-text password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.passwordHash, salt, (err, hash) => {
          if (err) throw err
          newUser.passwordHash = hash
          //User.save(newUser)
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
      })
    }
  })
})

module.exports = router;
