import {GraphQLServer,PubSub} from 'graphql-yoga';
import db  from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation';
import Post from './resolvers/Post'
import User from './resolvers/User'
import Subscription from './resolvers/Subscription'

const pubsub = new PubSub()
const resolvers = {
    Query,
    Mutation,
    Post,
    User,
    Subscription  
}
const server= new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers,
    context:{db,pubsub}
})
server.start(()=>{
console.log('server is up and running');

})