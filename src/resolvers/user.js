const { User } = require('../models/')

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id)
  },

  Mutation: {
    createUser: (_, { name }) => User.create({ name })
  }
}
