import React from 'react'


const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <div className="todo-card">
  <div className="todo-content">
    <h4 className="todo-title">{todo.title}</h4>
    <p className="todo-desc">{todo.desc}</p>
  </div>
  <button className="btn btn-sm btn-danger delete-btn" onClick={() => onDelete(todo)}>
    Delete
  </button>
</div>
    <hr />
    </>
  )
}

export default TodoItem
