let initState={
    posts:[
        {id:1,title:"this is the ist post",body:"i am ppost one"},
        {id:2,title:"this is the 2st post",body:"i am ppost two"},
        {id:3,title:"this is the 3st post",body:"i am ppost three"},
    ]
}

export const rootReducer=(state=initState,action)=>{
    if(action.type=="DELETE_POST"){
       
       let newPosts = state.posts.filter((post)=>{
           return action.id != post.id
       })
    //    console.log(newPosts)
       return (
        {
            ...state,
            posts:newPosts
           
        }
       )
       
    }
    return state
    
}

