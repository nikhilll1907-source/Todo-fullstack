import React from 'react'

function Todo({ i, task, id, deleteTodo, title }) {

  return (
  <div className="w-full bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col gap-3">
    
    {/* Title */}
    <h3 className="text-gray-800 font-semibold text-lg break-words">
      <span className="text-blue-500 mr-2">{i}.</span>
      {title}
    </h3>

    {/* Task */}
    <p className="text-gray-500 text-sm break-words">
      {task}
    </p>

    {/* Footer */}
    <div className="flex justify-end">
      <button
        onClick={() => deleteTodo(id)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition text-sm"
      >
        Delete
      </button>
    </div>

  </div>
)
}

export default Todo