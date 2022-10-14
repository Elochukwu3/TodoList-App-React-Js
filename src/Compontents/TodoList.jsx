


export default function TodoList({todoItem, change}) {
  return (
    <>
        {todoItem.length > 0 ? <ul>
         {
               (todoItem.map((e, i)=>{
                return (<li key={e.id}>{e}
                <button onClick={()=>change(e.id)}>Delete</button>
                </li>  
               )
            }))
           
         }
         
        </ul>:''}
    </>
  )
}
