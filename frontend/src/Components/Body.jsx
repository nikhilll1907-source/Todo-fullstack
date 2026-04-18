
import Todo from './Todo'


function Body({username,todos,deleteTodo}) {
 return (
<div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    
{
  todos.length === 0 
    ? (
      <h1 className="col-span-full text-xl text-center text-gray-500">
        No work for now 😌
      </h1>
    )
    : (
      <h1 className="col-span-full text-xl text-center text-gray-800 font-semibold">
  {`Welcome 👋 ${username}` }
</h1>
    )
}

    {
      todos.map((e, i) => {
        return (
          <Todo
            key={e._id}
            i={i + 1}
            task={e.task}
            id={e._id}
            deleteTodo={deleteTodo}
            title={e.title}
          />
        )
      })
    }

  </div>
)
}

export default Body