import { useState } from "react";

export default function TodoList({ todoItem, change, inputChange }) {
  return (
    <>
      {todoItem.length > 0 ? (
        <ul>
          {todoItem.map((eachTodo, i) => {
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
  let content;
  validating
    ? (content = (
        <>
          <input value={todos.text} onChange={()=> inputChange}/>{" "}
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
            }}
          >
            Edit
          </button>
        </>
      ));
  return (
    <>
      <p>{content}</p>
      <button onClick={() => onDelete(todos.id)}>Delete</button>
    </>
  );
}
