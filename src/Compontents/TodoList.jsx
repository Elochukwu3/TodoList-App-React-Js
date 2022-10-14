import TodoBtn from "./TodoBtn"


export default function TodoList({todoItem}) {
  return (
    <>
        {todoItem.length > 0 ? <ul>
         {
               (todoItem.map((e, i)=>{
                return (<li key={i}>{e}  <TodoBtn todo = {todoItem} id={i}/></li>  
               )
            }))
           
         }
         
        </ul>:''}
    </>
  )
}
