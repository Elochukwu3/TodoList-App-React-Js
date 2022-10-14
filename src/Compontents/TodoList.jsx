

export default function TodoList({todoItem}) {
  return (
    <ul>
        {
            todoItem.length && todoItem.map(m=>{
           return <li key = {m}>{m}</li>
            })
        }
    </ul>
  )
}
