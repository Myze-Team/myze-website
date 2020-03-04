require('dotenv').config()
const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// load user model
const User = require('../models/User')

// load validation helpers
const validator = require('../validation/validator')

router.post('/login', (req, res) => {
})
