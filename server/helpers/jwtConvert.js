const jwt = require('jsonwebtoken');

module.exports = {
  sign(user) {
    console.log(user)
    return jwt.sign(user, process.env.JWT_SECRET)
  },

  verify(token) {
    console.log(token)
    return jwt.verify(token, process.env.JWT_SECRET)
  }
}