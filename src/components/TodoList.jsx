import React from "react";
import "../App.css";

const TodoList = ({todos , setTodoList}) => {

    const handleDelete = (index)=>{
        setTodoList(todos.filter((item , i)=> i!== index));
    }

  return (
    <div className="todoListContainer">
      {todos.map((todo, index) => (
        <div className="list" key={index}>
          <button className="btn" onClick={()=> handleDelete(index)}>-</button>
          <span className="todo">{todo.charAt(0).toUpperCase() + todo.slice(1)}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
