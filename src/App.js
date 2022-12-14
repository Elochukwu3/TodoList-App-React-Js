import { useState } from "react";
import "./App.css";
import TodoList from "./Compontents/TodoList";
let next = 2;
const initia = [{ id: 1, text: "I am good", done: false }];
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(initia);

  function addTodo(e) {
    e.preventDefault();
    setTodoList([...todoList, { id: next++, text: todo, done: false }]);
    setTodo("");
  }

  function handleAddTodo(nextTodo) {
    setTodoList(
      todoList.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }
  function deleteBtn(p) {
    setTodoList(
      todoList.filter((e) => {
        const { id } = e;
        return id !== p;
      })
    );
  }
  return (
    <div className="App">
     <div className="AppInner">
     <h1>Todo Application</h1>
      <form onSubmit={addTodo}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
          style={{
           display:'block',
          width: '90%',
          fontSize:' 1.15rem',
          padding:' 0.8rem 1.5rem',
          color: '#000',
          background: '#ffff',
          borderRadius: '0.5rem',
          boxShadow:'0px 0px 4px rgba(58, 130, 230, 0.75)',
          margin:'1.5rem auto',
          overflowX:' scroll',
          }}
          className='inputOne'
        />
        <button type="submit" className="btnOne">
          Add Todo
        </button>
      </form>
      <TodoList
        todoItem={todoList}
        change={deleteBtn}
        inputChange={handleAddTodo}
      />
     </div>
    </div>
  );
}

export default App;
