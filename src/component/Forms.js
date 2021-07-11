import React from "react";
import uuid from 'react-uuid'
export default function Forms({
  setInputText,
  setTodos,
  inputText,
  todos,
  setStatus,
}) {
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  const submittodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: uuid() },
    ]);
    setInputText("");
  };
  const statuHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          className="todo-input"
          value={inputText}
          onChange={inputChangeHandler}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submittodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statuHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}
