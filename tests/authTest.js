// firebase client simulator for login and register
// obtain the tokens needed for server-side authentication
require('dotenv').config()
const firebase = require('firebase/app')
require('firebase/auth')
const firebaseConfig = require(process.env.FIREBASE_CONFIG_PATH)

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // get the id token after logging in
    user.getIdToken().then((idToken) => {
      console.log('ID TOKEN:\n' + idToken)
    })
  }
})

const register = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
}

const login = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((err) => console.log(err))
}

login('mendy@gmail.com', 'helloworld')
