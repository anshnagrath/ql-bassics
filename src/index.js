import {GraphQLServer} from 'graphql-yoga';
//type in graphql 
//scalar types
    //string
    //bools
    //int
    //float
    //ID


const typeDefs = `
type Query {
   me: User!
   greeting(name:String):String!
   users(input:String!):[User!]!
   searchPost(query:String):[Post!]!
}
type Post{
    id:ID!
    title:String!
    body:String!
    published:Boolean!
    author:User!

}
type User {
    id:ID!
    name:String!
    email:String!
    age:Int
}
`
const Users = [{
    id:'1',
    name:'ansh',
    email:'anshnagrath448@gmail.com',
    age:'26'
},{
    id:'2',
    name:'Sarah',
    email:'yoyoyooyoyo@gmaclscs.com',
    age:'16'
},{
    id:'3',
    name:'honeysigh',
    email:'yvsdfvsdfvsdf@gmaclscs.com',
    age:'36'
}]
const posts=[{
    id:'10',
    title:'graphq 101',
    body:"this is tbodyyyy",
    published:false,
    author:'1'
},{
    id:'11',
    title:'graphql 234',
    body:"body is finee4",
    published:true,
    author:'2'
},{
    id:'12',
    title:'music',
    body:"bocasdc4",
    published:true,
    author:'3'

}]
const resolvers = {
    Query:{
        searchPost(parentValue,args,ctx,info){
            if(!args.query){
                return posts
            }else{
            return posts.filter(post => post.title.includes(args.query))
            }
        },
         greeting(parentValue,args){
            return  `Hello ${args.name}`
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
        }
    },
    Post:{
        author(parentValue,argument,ctx,info){
            return Users.find(o=>o.id == parentValue.author);
        }
    }
}
const server= new GraphQLServer({
    typeDefs,resolvers
})
server.start(()=>{
console.log('server is up and running');

})