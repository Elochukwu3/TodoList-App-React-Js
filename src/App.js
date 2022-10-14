
import { useState } from 'react';
import './App.css';
import TodoList from './Compontents/TodoList';

function App() {
  const initiateTodo =()=>{

  }
  const [todo, setTodo] = useState(initiateTodo);
  let todos;
  function addTodo() {
// todos[...todo]
setTodo(todos)

  }
  return (
    <div className="App">
      <input  value={todo} className="toInput" onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
      <TodoList todoItem={todos}/>
    </div>
  );
}

export default App;
