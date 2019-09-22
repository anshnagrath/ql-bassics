const User = {
    coments(parentValue,args,{db},info){
        return db.comments.filter(o=>o.author == parentValue.id)
    },
    post(parentValue,args,{db},info){
        return db.posts.filter(o=> { return o.author == parentValue.id } )

    }
}
export default User
