require('dotenv').config()
const admin = require('firebase-admin')
const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH)

// initialize the firebase admin once, then require it wherever needed
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DB_URL,
})

module.exports = admin
