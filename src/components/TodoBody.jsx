import React, { useState } from 'react'
import '../App.css'
import TodoList from './TodoList'

const TodoBody = () => {
    const [todoList , setTodoList] = useState([]);

    const[todo , setTodo]= useState('');

    const addTodo = () =>{
        if(todo){
            setTodoList([...todoList , todo]);
            setTodo('');
        }
    }

  return (
    <div className='TodoContainer'>
        <div className='yourTodo'>
            To - do lists of the day    
        </div>
        <div className='`todoBody`'>
            <input type="text" className='input' placeholder='Your todo of the day' onChange={(e)=>setTodo(e.target.value)}/>
            <button className='btn' onClick={addTodo}> + </button>
            {console.log(todoList)}
        </div>
        <div className="finalList">
            <TodoList todos = {todoList} setTodoList = {setTodoList}/>
        </div>
    </div>
  )
}

export default TodoBody