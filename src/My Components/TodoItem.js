import React, { useState } from "react";

const TodoItem = ({ todo, onDelete }) => {
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleCheck = () => {
    setChecked(true);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    setShowModal(false);
    setDeleting(true);

    // Wait for animation to finish before deleting
    setTimeout(() => {
      onDelete(todo);
    }, 500);
  };

  const handleCancel = () => {
    setShowModal(false);
    setChecked(false);
  };

  return (
    <>
      <div
        className={`todo-card d-flex align-items-center justify-content-between ${
          deleting ? "slide-out-right" : ""
        }`}
      >
        <div className="d-flex align-items-center">
          <input
            type="checkbox"
            className="todo-checkbox me-3"
            checked={checked}
            onChange={handleCheck}
          />
          <div>
            <h4
              className="todo-title mb-0"
              style={{
                textDecoration: checked ? "line-through" : "none",
                color: checked ? "gray" : "black",
              }}
            >
              {todo.title}
            </h4>
            <p
              className="todo-desc mb-0 text-muted"
              style={{
                textDecoration: checked ? "line-through" : "none",
              }}
            >
              {todo.desc}
            </p>
          </div>
        </div>
      </div>
      <hr />

      {/* 🟠 Bootstrap Modal Centered */}
      {showModal && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow-lg rounded-4">
              <div className="modal-header">
                <h5 className="modal-title text-danger">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCancel}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this todo?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancel}
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleConfirmDelete}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoItem;

