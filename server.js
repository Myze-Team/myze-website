require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')


// listen on port
const port = process.env.PORT || 5000

// connect to MongoDB
// supply cluster, database, and credentials
if (!process.env.DEV_NO_DB) {
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
}
else {
  // test without MongoDB
  app.listen(port, () => {
    console.log('App is listening on port ' + port)
  })
}
