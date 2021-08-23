import React, { useState } from 'react';


export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank");
        }
        else{
            addTodo(title,desc)
            setTitle("");
        setDesc("");
        }
        
    }
    let styless={
        marginLeft: "10%",
        marginRight: "10%"
    }
    return (
        <div className="Container" style={styless} >
            <h3>Add a ToDo list</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">ToDo Title </label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">ToDo Description</label>
                        <input type="text" onChange={(e)=>{setDesc(e.target.value)}} value={desc} className="form-control" id="desc"/>
                    </div>
                    <button type="submit" className="btn btn-success btn-sm">Add ToDo</button>
            </form>
        </div>
    )
}
