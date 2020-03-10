require('dotenv').config()
const admin = require('./admin')

// verifies the JWT token passed via the header
// the resulting user id is stored in res.locals.uid
// and can be accessed by the subsequent handlers
module.exports = (req, res, next) => {
  // grab the header containing the auth token
  const authHeader = req.headers.authorization
  console.log('RECEIVED AUTH HEADER:\n' + authHeader)

  if (!authHeader) {
    res.status(401).send('No authentication header provided')
    return
  }

  // extract the token
  const token = authHeader.split(' ')[1]

  // perform the verification
  admin.auth().verifyIdToken(token)
    .then((decodedToken) => {
      res.locals.uid = decodedToken.uid
      next()
    })
    .catch(() => {
      res.status(403).send('Unauthorized access')
    })
}
