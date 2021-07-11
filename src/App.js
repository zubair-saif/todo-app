import React, { useState, useEffect } from "react";
import "./App.css";
import Forms from "./component/Forms";
import TodoList from "./component/TodoList";

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, SetFitlerTodo] = useState([]);
  //function

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        SetFitlerTodo(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        SetFitlerTodo(todos.filter((todo) => todo.completed === false));
        break;
      default:
        SetFitlerTodo(todos);
        break;
    }
  };
  return (
    <div>
      <header>
        <h1>Todo List </h1>
      </header>
      <Forms
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTodo={filterTodo}/>
    </div>
  );
}

export default App;
