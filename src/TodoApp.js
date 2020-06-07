import React from "react"

const TodoApp=({todos,deleteTodo})=>{
    const todoList= todos.length ? (
          todos.map((todo)=>{
            return(

                <div className="list-group" key={todo.id}>
                <a href="#!" className="list-group-item list-group-item-action" onClick={()=>{deleteTodo(todo.id)}}>{todo.task}</a>
                </div>


            )
       })
    ) :
    (
        <div>
            <p className="text-warning">Nothing to show!!</p>
        </div>
    )

    return(
        <div>
            {todoList}
        </div>
    )
   
}

export default TodoApp