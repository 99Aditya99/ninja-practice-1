import React,{Component} from "react"
import {BrowserRouter,Route} from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
// import TodoApp from "./TodoApp"
// import AddTodo from "./AddTodo"

// import Ninjas from "./Ninjas"
// import AddNinja from "./AddNinja"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"


// class App extends Component {
//   state ={
//     ninjas:[
//       {id:1, country:"Pakistan",belt:"Red"},
//       {id:2, country:"Bngladesh",belt:"Green"},
//       {id:3, country:"Srilanka",belt:"Blue"},
//     ]
//   }

//   addNinja=(ninja)=>{
//     ninja.id=Math.random()
//     this.setState({
//       ninjas:[...this.state.ninjas,ninja]
//     })
//   }

//   deleteNinja=(id)=>{
//     let filteredNinja=this.state.ninjas.filter((ninja)=>{
//       return ninja.id !== id
//     })
//     this.setState({
//       ninjas:filteredNinja
//     })
//   }
//   render(){
//     return (
//       <div className="App">
//         <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
//         <AddNinja addNinja={this.addNinja}/>
//       </div>
//     );
//   }
//   }
  






// class App extends Component {
//   state ={
//     todos:[
//       {id:1, task:"Go to bazar"},
//       {id:2, task:"buy some milk"},
//       {id:3, task:"complete breakfast"}
//     ]
//   }

//   addtodo=(newTodo)=>{
//     newTodo.id=Math.random()
//     this.setState({
//       todos:[...this.state.todos,newTodo]
//     })
//   }

//   deleteTodo =(id)=>{
//     console.log(id)
//     let updatedtodoList=this.state.todos.filter((todo)=>{
//       return todo.id !== id
//     })
//     this.setState({
//       todos:updatedtodoList
//     })
//   }
  
//   render(){
//     return (
//       <div className="App container text-center">
//         <h2 className="text-success ">Todo App</h2>
//         <TodoApp todos={this.state.todos} deleteTodo={this.deleteTodo}/>
//         <AddTodo addtodo={this.addtodo}/>
//       </div>
//     );
//   }
//   }





// class App extends Component {
//   render(){
//     return (
//       <BrowserRouter>
//         <div className="App container text-center">
//           <Navbar/>
//           <Route exact path="/" component={Home}/>
//           <Route exact path="/about" component={About}/>
//           <Route exact path="/contact" component={Contact}/>
//         </div>
//       </BrowserRouter>
//     );
//   }
//   }


// redux...................................................................
class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App container text-center">
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
  }


export default App;
