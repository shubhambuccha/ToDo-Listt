import React from 'react'


export const TodoItem = ({todo,onDelete}) => {
    return (
        <div className="card">
  <h5 className="card-header">{todo.title}</h5>
  <div className="card-body">
    <p className="card-text">{todo.desc}</p>
    <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
  </div>
</div>
    )
}
