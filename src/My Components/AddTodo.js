import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and Description cannot be blank");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="addtodo-container">
      <h3 className="text-center mb-3">Add a Todo</h3>
      <form onSubmit={submit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control mb-3"
          placeholder="Enter your todo title"
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="form-control mb-3"
          placeholder="Enter your todo description"
        />
        <button type="submit" className="btn btn-success w-100">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
