import React from 'react'

function Header() {
  return (
    <>
    <div className='bg-cyan-900 flex w-full justify-between p-3'>
        <div className='p-4'>Logo </div>
        <div className='flex gap-3 '>
            <div className='p-1 hover:bg-cyan-600 rounded-lg flex justify-center items-center min-w-18 '>Add-Todo</div>
             <div className='p-1 hover:bg-cyan-600 rounded-lg flex justify-center items-center min-w-18 '>Profile</div>
            <div className='p-2 hover:bg-cyan-600 rounded-lg flex justify-center items-center min-w-18  '>About</div>
        </div>
    </div>
    </>
  )
}

export default Header