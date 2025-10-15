import "./App.css";
import Header from "./My Components/Header";
import Todos from "./My Components/Todos";
import React, { useState, useEffect } from "react";
import AddTodo from "./My Components/AddTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // user typing
  const [activeSearch, setActiveSearch] = useState(""); // applied on Go click

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = { sno, title, desc };
    setTodos([...todos, myTodo]);
    setShowAddTodo(false);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Filter todos only when Go is clicked
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
    todo.desc.toLowerCase().includes(activeSearch.toLowerCase())
  );

  return (
    <>
      <Router>
        <Header
          searchBar={true}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearchSubmit={() => setActiveSearch(searchTerm)}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={<Todos todos={filteredTodos} onDelete={onDelete} />}
          />
        </Routes>

        {/* Floating Add Button */}
        <button className="floating-btn" onClick={() => setShowAddTodo(true)}>
          +
        </button>

        {/* Popup AddTodo Form */}
        {showAddTodo && (
          <div className="popup-overlay" onClick={() => setShowAddTodo(false)}>
            <div className="popup-box" onClick={(e) => e.stopPropagation()}>
              <AddTodo addTodo={addTodo} />
            </div>
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
