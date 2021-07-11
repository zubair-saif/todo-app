import React from "react";
import Todos from "./Todos";


export default function TodoList({ todos, setTodos, filterTodo }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodo.map((todo) => {
          return (
            <Todos
              key={todo.id}
              text={todo.text}
              todo={todo}
              filterTodo={filterTodo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
}
