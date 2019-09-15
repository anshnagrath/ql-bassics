import {GraphQLServer} from 'graphql-yoga';
const typeDefs = `
type Query {
   me: User!
   post:Posts!
   users(input:String!):[User!]!
   searchPost(query:String):[Posts!]!
}
type Posts{
    id:ID!
    title:String!
    body:String!
    published:Boolean!

}
type User {
    id:ID!
    name:String!
    email:String!
    age:Int
}
`
const posts=[{
    id:'10',
    title:'graphq 101',
    body:"this is tbodyyyy",
    published:false
},{
    id:'11',
    title:'graphql 234',
    body:"body is finee4",
    published:true
},{
    id:'12',
    title:'music',
    body:"bocasdc4",
    published:true
}]
const resolvers = {
    Query:{
        searchPost(parentValue,args,ctx,info){
            return posts.filter(post => post.title.includes(args.query))

        },
        users(parent,args,ctx,info){
         return [
            {
                id:12323,
                name:'fasdfasdf',
                email:'anshnagrath@gmail.com',
                age:34
            },
            {
                id:12323,
                name:'fasdfasdf',
                email:'anshnagrath@gmail.com',
                age:34
            }

         ]   
        },
        me(){
            return{
              id:"12363",
              name:"varun",
              email:"casdcbas@gmail.com",
              age:12  


            }
        },
        post(){
            return{
                id:'12213',
                title:'Publisherfsdjfbbdsfvdshvsd',
                body:"casdcasdc this is a String",
                published:true
            }
        }
    }
}
const server= new GraphQLServer({
    typeDefs,resolvers
})
server.start(()=>{
console.log('server is up and running');

})