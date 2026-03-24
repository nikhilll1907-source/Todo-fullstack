import React from 'react'

function AddTodo() {
  return (
    <div className=' w-full '>
        <form className='p-3'  action="">
            <input type="text" placeholder='Write your todo' name='content' className='border-2 rounded-2xl w-full p-3 text-white border-black' />
            <button className='m-3 p-4 rounded-2xl bg-amber-700 hover:bg-amber-900'>Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo