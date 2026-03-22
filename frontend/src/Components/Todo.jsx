import React from 'react'

function Todo() {
  return (
    <div className='w-full bg-gray-900  text-white border-2 border-black m-1 rounded-lg flex justify-between'>
        <h3 className='  p-2 ' ><span className='m-2 text-xl'>1.</span>Go to Gym </h3>
        <div className='m-4 hover:bg-red-500 rounded-xl' >  <i  className="ri-delete-bin-6-line "></i></div>
      
    </div>
  )
}

export default Todo