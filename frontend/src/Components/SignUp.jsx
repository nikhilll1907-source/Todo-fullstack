import React from 'react'

function SignUp() {
  return (
    <div className=' h-screen flex flex-col  items-center justify-center p-4 gap-4 bg-gray-800 text-white'>
        <h1 className='text center text-black text-4xl uppercase underline te mb-8'>Create new User</h1>
        <input type="text" className='border-2 rounded-2xl  p-3' placeholder='Enter Your User Name' />
         <input type="text" className='border-2 rounded-2xl p-3' placeholder='Enter Your User Password' />
       <button className='p-3 border-2 rounded-2xl hover:bg-gray-950 transition duration-1000 ease-in-out active:scale-95 '>Create Your account</button>
        
    </div>
  )
}

export default SignUp