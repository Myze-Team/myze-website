// TEMPORARILY OBSOLETE
//
// wil be used once we switch firebase out for 0Auth
require('dotenv').config()
const passport = require('passport')
const LocalStrategy = require("passport-local").Strategy
const JWTStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const User = require("../models/User")

// parses the header for the JWT token,
// expects the Bearer authentication scheme
//
// Authorization: Bearer <JWT token>
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
}

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (email, password, done) => {
      // find user
      User.findOne({ email: email }, (err, user) => {
        if (err) return done(err)

        if (!user)
          return done(null, false, { message: 'Login strategy: Email unregistered' })

        // verify passowrd
        bcrypt.compare(password, user.passwordHash, (err, res) => {
          if (err) throw err

          if (res)
            return done(null, user)
          else
            return done(null, false, { message: 'Login strategy: Password incorrect' })
        })
      })
    }
  )
)

passport.use(
  'jwt',
  new JWTStrategy(opts,
    (payload, done) => {
      // payload is the jwt payload, which should include the
      // identifier for the authenticating user
      User.findOne({ email: payload.email }, (err, user) => {
        if (err) return done(err, false)

        if (user)
          return done(null, user)
        else
          return done(null, false, { message: 'JWT strategy: Email unregistered' })
      })
    }
  )
)
