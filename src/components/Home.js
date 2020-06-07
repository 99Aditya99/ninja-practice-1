import React, {Component} from "react"
// import axios from "axios"
import {connect} from "react-redux"
import {deletePost} from "../actions/postAction.js"

// class Home extends Component{
//     state={
//         posts:[]
//     }
//     componentDidMount(){
//         axios({
//             method:"get",
//             url:"https://jsonplaceholder.typicode.com/posts"
//         })
//         .then((res)=>{
//             this.setState({
//                 posts:res.data.slice(0,10)
//             })
//             console.log(this.state.posts)
//         })
//         .catch(err=>{
//             console.error(err)
//         })
//     }
//     render(){
//         const {posts}=this.state
//         let postList=posts.length ?(
//             posts.map(post=>{
//                 return(
//                     <div className="card" key={post.id}>
//                         <div className="card-body">
//                         <h4 className="card-title">{post.title}</h4>
//                         <p className="card-text">
//                             {post.body}
//                         </p>
//                         </div>
//                     </div>
//                 )
//             })
//         ):(
//             <div>
//                 <h3 className="text-danger">No post yet!!</h3>
//             </div>
//         )
//         return(
//             <div>
//                 {postList}
//             </div>
//         )
//     }
// }
// export default Home








// redux...................................................................

class Home extends Component{
    handleDeleteOnClick = (e)=>{
        // console.log(e.target.id)
        let postId=e.target.id
        this.props.deletePost(postId)
    }
    render(){
    //    console.log(this.props)
        const {posts}=this.props
        let postList=posts.length ?(
            posts.map(post=>{
                return(
                    <div className="card" key={post.id}>
                        <div className="card-body">
                        <h4 id={post.id} className="card-title" onClick={this.handleDeleteOnClick}>{post.title}</h4>
                        <p className="card-text">
                            {post.body}
                        </p>
                        </div>
                    </div>
                )
            })
        ):(
            <div>
                <h3 className="text-danger">No post yet!!</h3>
            </div>
        )
        return(
            <div>
                {postList}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return(
      {
        posts: state.posts
      }
    )
  }

  const mapDispatchToProps=(dispatch)=>{
    return{
        deletePost:(id)=>{dispatch(deletePost(id))}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home)