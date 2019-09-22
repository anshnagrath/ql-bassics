const Post = {
    author(parentValue,argument,{db},info){
        return db.Users.find(o=>o.id == parentValue.author);
    }
}
export default Post