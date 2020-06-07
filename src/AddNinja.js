import React, {Component} from "react"

class AddNinja extends Component{
    state={
        country:null,
        belt:null
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addNinja(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Country : </label>
                    <input type="text" id="country" onChange={this.handleChange}></input><br></br>
                    <label>Belt : </label>
                    <input type="text" id="belt" onChange={this.handleChange}></input><br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja