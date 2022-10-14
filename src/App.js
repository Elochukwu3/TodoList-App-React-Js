
import { useState } from 'react';
import './App.css';
import TodoList from './Compontents/TodoList';
let next = 2;
const initia =[
  {id:1,
  text:"I am good",
done:false
}

]
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(initia);

  function addTodo(e) {
    e.preventDefault()
   setTodoList( [...todoList, {id: next++, text: todo, done:false,}])
   setTodo('')
   
  }
  function deleteBtn(p) {
    setTodoList(todoList.filter((e)=>{
      const{id} = e;
      return id !== p;
    }))
  }
  return (
    <div className="App">
        <h1>Todo Application</h1>
      <form onSubmit={addTodo}>
      <input  value={todo} className="toInput" onChange={(e)=>setTodo(e.target.value)} required/>
        <button type='submit' className='btnOne'>Add Todo</button>
      </form>
      <TodoList todoItem={todoList} change={deleteBtn}/>
    
    </div>
  );
}

export default App;
