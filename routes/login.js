require('dotenv').config()
const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

// login form
router.get('/', (req, res) => {
  res.render('login', { message: req.flash('info') })
})

module.exports = router;
