


export default function TodoList({todoItem, change}) {
  return (
    <>
        {todoItem.length > 0 ? <ul>
         {
               (todoItem.map((e, i)=>{
                return (<li key={i}>{e}
                <button onClick={()=>change(i)}>Delete</button>
                </li>  
               )
            }))
           
         }
         
        </ul>:''}
    </>
  )
}
