const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://erisjr:zack1254@mongocluster-bv4ix.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schemas/user.graphql'),
  resolvers
})

server.start()
