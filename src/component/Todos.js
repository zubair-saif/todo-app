import React from "react";
import uuid from 'react-uuid'
export default function Todos({ text, todo, setTodos, todos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((ele) => ele.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if ((item.id = todo.id)) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li key={uuid()} className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
