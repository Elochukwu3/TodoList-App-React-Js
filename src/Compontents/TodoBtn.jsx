import React from 'react';


export default function TodoBtn({todo, e}) {
    function deleteTodo() {
     const filterAll =   todo.filter((f, i)=>{
       return i === e
     })
    
    }
  return (
    <button onClick={deleteTodo}>Delete</button>
  )
}
