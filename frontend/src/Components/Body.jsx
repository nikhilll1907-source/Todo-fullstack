
import Todo from './Todo'


function Body({todos,deleteTodo}) {
  return (
    <div className=''>
    {
       todos.map((e,i) => {
      return <Todo  key={i} i={i+1} todo={e.todo}  id={e.id} deleteTodo={deleteTodo} />
       })
     }
    </div>
  )
}

export default Body