const Query={
    coments(parentValue,args,{db},info){
        return db.comments
    },
    searchPost(parentValue,args,{db},info){
        if(!args.query){
            return db.posts
        }else{
        return db.posts.filter(post => post.title.includes(args.query))
        }
    },
     greeting(parentValue,args){
        return  `Hello ${args.name}`
     },
    users(parent,args,{db},info){
        if(!args.query){
            return db.Users
        }
    },
    me(){
        return{
          id:"12363",
          name:"varun",
          email:"casdcbas@gmail.com",
          age:12  


        }
    }
}
export default Query