import React from 'react'

const Todo = ({todo,deleteHandler}) => {
    return (
        <div className="input-text">
            {todo.map((todo,index) =>
            <div key={index}>
                <h5>{todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h5>
            </div>)}
        </div>
    )
}

export default Todo;