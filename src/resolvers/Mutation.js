import uuidv4 from 'uuid/v4'
const Mutation =   {
    createUser(parentValue,args,{db},info){
        const emailTaken = db.Users.some((o)=> o.email == args.data.email)
        if(emailTaken){
            throw new Error('Email already taken')
        }
        const user = {
            id:uuidv4(),
            name:args.data.name,
            email:args.data.email,
            age:args.age
        }
         db.Users.push(user)
         return user
    },
    updateUser(parentValue,args,{db},info){
        const {id,data} = args
        const user = db.Users.find(o=>o.id == id);
        if(!user){
            throw new Error('User not found');

        }else{
            if(typeof data.email == 'string'){
                const EmailTaken =  db.Users.some((user)=> user.email == data.email)
                if(EmailTaken){
                    throw new Error ('Email takken')
                }
                user.email =data.email
            }
            if(typeof data.name == 'string'){
                user.name = data.name
            }
            if(typeof data.age !== 'undefined' ){
                user.age = data.age
            }
            return user

        }
    },
    updateComment(parentValue,args,{db},info){
        const {id,data} = args
        const comment=db.comments.find((o)=>o.id === id);
        if(!comment){
            throw new Error('comment not found')
        }else{
           if(typeof data.text == 'string'){
               comment.text = data.text
           }
        }

    },
    updatePost(parenValue,args,{db},info){
        const {id,data} = args
        const post = db.posts.find((o)=>o.id == args.id);
        if(!post){
            throw new Error('no post found')
        }
        if(typeof data.title == 'string'){
            post.title == data.title
        }
        if(typeof data.body == 'string'){
            post.body == data.body
        }
        if(typeof data.published == 'boolean'){
            post.published == data.published
        }
        return post


    },
    createPost(parentValue,args,{db},info){
        const userExist = db.Users.some(o=>o.id ===args.data.author)
        if(!userExist){
            throw new Error('user not found')
        }else{
            const post={
                id:uuidv4(),
                title:args.data.title,
                body:args.data.body,
                published:args.data.published,
                author:args.data.author
            }
            db.posts.push(post)
            return post

        }

    },
  createComment(parentValue,args,{db,pubsub},info){
    const userExist = db.Users.some(o=>o.id ===args.data.author)
    if(!userExist){
        throw new Error('user not found')
    }
    const postExist = db.posts.some((o)=>{ return o.id === args.data.post && o.published == true} )

    if(!postExist){
        throw new Error('post not found')
    }
    const newcomment = {
        id: uuidv4(),
        text:args.data.text,
        author:args.data.author
    }
    db.comments.push(newcomment)
    pubsub.publish(`comment ${args.data.post}`,{comment})
    return newcomment;

  },
  deletePost(parentValue,args,{db},info){
    const postIndex = db.posts.findIndex(o=>o.id == args.id)
    if(postIndex == -1){
        throw new Error("no user found")
    }else{
        let removed =  db.posts.splice(postIndex,1)   
        return removed[0];
    }

  },
  deleteUser(parentValue,args,{db},info){
      const userIndex = db.Users.findIndex(o=>o.id == args.id)
      if(userIndex == -1){
        throw new Error("no user found")
      }else{
         let removedUser =  db.Users.splice(userIndex,1)
          posts= db.posts.filter((o) =>o.id==args.id)   
          comments= db.comments.filter((o) =>o.author==args.id)   

          return removedUser[0];
      }
  }  


}
export default Mutation