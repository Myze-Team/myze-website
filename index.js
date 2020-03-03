const express = require('express')
const app = express()
const path = require('path')

// serve static files
app.use(express.static(path.join(__dirname, '/client')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'))
})

app.get('*', (req, res) => {
  res.redirect('/')
})

// listen on port
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('App is listening on port ' + port)
})
