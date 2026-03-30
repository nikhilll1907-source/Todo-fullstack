
import Todo from './Todo'


function Body({todos}) {
  return (
    <div className=''>
    {
       todos.map((e,i) => {
      return <Todo key={i} i={i+1} todo={e.todo}  />
       })
     }
    </div>
  )
}

export default Body