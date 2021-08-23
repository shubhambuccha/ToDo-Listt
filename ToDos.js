import React from 'react'
import { TodoItem } from './TodoItem'

export const ToDos = (props) => {
    let mystyle={
        minHeight:"100vh",
        margin:"40px auto"
    }
    return (
        <div className="container my-3" style={mystyle}>
            <h3 className="my-3">ToDo List</h3>
            {props.todos.length===0? "No todos to display" :
                
                    props.todos.map((todo)=>{
                        return( <><hr/><TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>  <hr/> </>)
                    })
                
            }
        </div>
    )
}
