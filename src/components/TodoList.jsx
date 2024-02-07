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
          <span>{todo}</span>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
