import React from "react";
import "../App.css";

const TodoList = ({todos}) => {
  return (
    <div className="todoListContainer">
      {todos.map((todo, index) => (
        <div className="list" key={index}>
          <button className="btn">-</button>
          <span>{todo}</span>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
