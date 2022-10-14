
import { useState } from 'react';
import './App.css';
import TodoList from './Compontents/TodoList';

function App() {
  // const initiateTodo =()=>{

  // }
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addTodo(e) {
    e.preventDefault()
   setTodoList(todoList => [...todoList, todo])
   console.log(todoList);
   
  }
  return (
    <div className="App">
        <h1>Todo Application</h1>
      <form onSubmit={addTodo}>
      <input  value={todo} className="toInput" onChange={(e)=>setTodo(e.target.value)} required/>
        <button type='submit' className='btnOne'>Add Todo</button>
      </form>
      <TodoList todoItem={todoList} />
    </div>
  );
}

export default App;
