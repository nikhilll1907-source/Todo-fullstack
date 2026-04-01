import React from 'react'
import { useState } from 'react';
import {Link } from 'react-router-dom'
function Singin({login}) {
  
   let [username,setUsername]=useState('');
     let [password,setPassword]=useState('');
  
      function onSubmit(e){
        e.preventDefault();
         login(username,password);
        setUsername('');
        setPassword('');
      }
  return (
     <div className='  flex flex-col  items-center justify-center p-4  gap-4 bg-gray-800 text-white'>
      <h1 className='text center text-black text-4xl uppercase underline te mb-8'>Login to your account</h1>
      <form onSubmit={(e)=>onSubmit(e)} className=' flex flex-col gap-4 items-center' >
        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" className='border-2 rounded-2xl  p-3 ' placeholder='Enter Your User Name' />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" className='border-2 rounded-2xl p-3' placeholder='Enter Your User Password' />
        <button className='p-3 border-2 rounded-2xl hover:bg-gray-950 transition duration-1000 ease-in-out active:scale-95 '>Login Your account</button>
          <Link to='/signup' className='text-red-400 underline text-2xl my-3'>Create new User</Link>
      </form>

    </div>
  )
}

export default Singin