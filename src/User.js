const { model, Schema } = require('mongoose')

const UserScheme = new Schema({
  name: String
})

module.exports = model('User', UserScheme)
