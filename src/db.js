
let comments = [
    {
       id:'1',
       title:'liked it',
       author:'1'
   },
   {
       id:'2',
       title:'Nailed it',
       author:'2'
   },
   {
       id:'3',
       title:'Scared me',
       author:'3'
   }
   
   ]
   let Users = [{
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
   let posts=[{
       id:'10',
       title:'graphq 101',
       body:"this is tbodyyyy",
       published:true,
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
const db={
Users,posts,comments
}   
export {db as default}