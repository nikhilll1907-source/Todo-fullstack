import React from 'react'
import { useState } from 'react'

function AddTodo({addTodo}) {
  const [content, setContent] = useState('')
    function onSubmit(e){     
         e.preventDefault();
         addTodo(content);
        setContent('');
    }
  return (
    <div onSubmit={(e)=>onSubmit(e)} className=' w-full '>
        <form className='p-3'  action="">
            <input value={content} onChange={ (e)=> setContent(e.target.value)} type="text" placeholder='Write your todo' name='content' className='border-2 rounded-2xl w-full p-3 text-white border-black' />
            <button  className='m-3 p-4 rounded-2xl bg-amber-700 hover:bg-amber-900'>Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo