
import Todo from './Todo'


function Body({todos,deleteTodo}) {
  return (
    <div className=''>
    {
        (todos.length === 0) 
          ? <h1 className='text-2xl text-center mt-3'>No work for now relax</h1> 
          : <h1 className='text-2xl text-center m-3 p-4'>{`welcome `}</h1>
      }
   {
        todos.map((e,i) => {
      return <Todo  key={i} i={i+1} todo={e.task}  id={e._id} deleteTodo={deleteTodo} />
       })
      }
    </div>
  )
}

export default Body