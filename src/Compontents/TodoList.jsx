


export default function TodoList({todoItem, change}) {
  return (
    <>
        {todoItem.length > 0 ? <ul>
         {
               (todoItem.map((e, i)=>{
                const {id, text, done} = e;
                return (<li key={id}>{text}
                <button onClick={()=>change(id)}>Delete</button>
                </li>  
               )
            }))
           
         }
         
        </ul>:''}
    </>
  )
}
