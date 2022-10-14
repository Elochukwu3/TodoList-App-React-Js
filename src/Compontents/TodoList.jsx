import { useRef, useState } from "react";

export default function TodoList({ todoItem, change, inputChange }) {
  return (
    <>
      {todoItem.length > 0 ? (
        <ul>
          {todoItem.map((eachTodo) => {
            const { id } = eachTodo;
            return (
              <li key={id}>
                <Task onDelete={change} todos={eachTodo} inputChange={inputChange}/>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}

function Task({ todos, onDelete, inputChange }) {
  const [validating, setValidating] = useState(false);
  const inputCaret = useRef('')
  let content;
  validating
    ? (content = (
        <>
          <input ref={inputCaret} value={todos.text} onChange={e=>{inputChange({...todos, text:e.target.value})}} />
          <button
            onClick={() => {
              setValidating(false);
            }}
          >
            Save
          </button>
        </>
      ))
    : (content = (
        <>
          <input value={todos.text} readOnly />{" "}
          <button
            onClick={() => {
              setValidating(true);
              console.log(inputCaret.current);
              inputCaret.current.focus()
            }}
          >
            Edit
          </button>
        </>
      ));
  return (
    <>
    <input type="checkbox" onChange={(e)=>{inputChange({...todos, done: e.target.checked})}}/>
      <p>{content}</p>
      <button onClick={() => onDelete(todos.id)}>Delete</button>
    </>
  );
}
