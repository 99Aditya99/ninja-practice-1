import React,{Component} from "react"

class AddTodo extends Component{
    state={
        task:""
    }
    handleChange=(e)=>{
        this.setState({
            task:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addtodo(this.state)
        this.setState({
            task:""
        })
    }
    render(){
        return(
            <div>
                <form className="form-inline my-3" onSubmit={this.handleSubmit} >
                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                <input onChange={this.handleChange} type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Add Task...." value={this.state.task} />
                <button type="submit" className="btn btn-primary mb-2 mx-0">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo