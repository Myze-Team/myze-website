require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()


// json body parser
app.use(express.json())


// serve static files
app.use(express.static(path.join(__dirname, '/client/build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.get('*', (req, res) => {
  res.redirect('/')
})

// listen on port
const port = process.env.PORT || 5000

// connect to MongoDB
// supply cluster and credentials
mongoose.connect('mongodb+srv://'
  + process.env.MONGO_DB_USER + ':'
  + process.env.MONGO_DB_PASS + '@'
  + process.env.MONGO_DB_CLUSTER
  + '.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true },
  () => {
    app.listen(port, () => {
      console.log('App is listening on port ' + port)
    })
  }
)
