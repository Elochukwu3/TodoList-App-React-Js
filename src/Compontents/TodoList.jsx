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
                <Task
                  onDelete={change}
                  todos={eachTodo}
                  inputChange={inputChange}
                />
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
  const [isEditing, setEditing] = useState(false);
  const renderCaret = useRef();//useref for making reference to the input tag
  let content;
//if its user wants to edit;
  isEditing
    ? (content = (
        <>
          <input
          type='text'
            ref={renderCaret}
            value={todos.text}
            onChange={(e) => {
              inputChange({ ...todos, text: e.target.value });
            }}
            className="inputText"
          />
          <button
            onClick={() => {
              setEditing(false);
            }}
          >
            Save
          </button>
        </>
      ))
    : (content = (
        <>
          <input type='text'value={todos.text}  ref={renderCaret}  className="inputText" readOnly/>
          <button
            onClick={() => {
              setEditing(true); 
              renderCaret.current.focus();
            //onclick focus
            }}
          >
            Edit
          </button>
        </>
      ));


  return (
    <>
     <label>
     
     <input
        type="checkbox"
        onChange={(e) => {
          inputChange({ ...todos, done: e.target.checked });
        }}
      />
      <span className="bubble business"></span>
     </label>

      <>{content}</>
      <button onClick={() => onDelete(todos.id)} style={{background: 'red'}}>Delete</button>

    </>
  );
}
