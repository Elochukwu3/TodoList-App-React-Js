import { useState } from "react";



export default function TodoList({todoItem, change}) {
  return (
    <>
        {todoItem.length > 0 ? <ul>
         {
               (todoItem.map((eachTodo, i)=>{
                const {id} = eachTodo;
                return (<li key={id}>
               <Task onDelete={change} todos={eachTodo}/>
                </li>  
               )
            }))
           
         }
         
        </ul>:''}
    </>
  )
}

function Task({todos, onDelete}) {
    const[validating, setValidating] = useState(false);
    let content;
   validating ?content=(<><input value={todos.text}/>  <button onClick={() =>{setValidating(true)}} >Edit</button></>):
   content = (<><input value={todos.text} readOnly/> <button onClick={() =>{setValidating(false)}} >save</button></>);
    return(
        <>
        <p>{content}</p>
        <button onClick={()=>onDelete(todos.id)}>Delete</button>
        </>
    )
    
}
