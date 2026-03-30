import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function SignUp({signup}) {
       
    let [username,setUsername]=useState('');
   let [password,setPassword]=useState('');

    function onSubmit(e){
      e.preventDefault();
      signup(username,password)
      setUsername('');
      setPassword('');
    }


  return (
    <div className='  flex flex-col  items-center justify-center p-4  gap-4 bg-gray-800 text-white'>
      <h1 className='text center text-black text-4xl uppercase underline te mb-8'>Create new User</h1>
      <form onSubmit={(e)=>onSubmit(e)} className=' flex flex-col gap-4' >
        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" className='border-2 rounded-2xl  p-3 ' placeholder='Enter Your User Name' />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" className='border-2 rounded-2xl p-3' placeholder='Enter Your User Password' />
        <button className='p-3 border-2 rounded-2xl hover:bg-gray-950 transition duration-1000 ease-in-out active:scale-95 '>Create Your account</button>
      </form>

    </div>
  )
}

export default SignUp