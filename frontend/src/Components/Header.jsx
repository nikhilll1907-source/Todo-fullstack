import React, { Activity } from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header({logout}) {
  return (
    <>
    <div className='bg-cyan-900 flex w-full justify-between p-3'>
        <div className='p-4'>Logo </div>
        <div className='flex gap-3 items-center'>
          <NavLink className={({isActive})=>{
             return `p-1  hover:bg-cyan-600 ${isActive ? "text-white" : "text-black"} rounded-lg flex justify-center items-center min-w-18 `
          }} to='/'
          >Home
          </NavLink>

            <NavLink className={({isActive})=>{
             return `p-1  hover:bg-cyan-600 ${isActive ? "text-white" : "text-black"} rounded-lg flex justify-center items-center min-w-18 `
          }} to='/add-todo'
          >Add-Todo
          </NavLink>

            <NavLink className={({isActive})=>{
             return `p-1  hover:bg-cyan-600 ${isActive ? "text-white" : "text-black"} rounded-lg flex justify-center items-center min-w-18 `
          }} to='/about'
          >About
          </NavLink>

             <NavLink className={({isActive})=>{
             return `p-1  hover:bg-cyan-600 ${isActive ? "text-white" : "text-black"} rounded-lg flex justify-center items-center min-w-18 `
          }} to='/login'
          >login
          </NavLink>
          
             <button onClick={()=>logout()}   className='bg-red-600 p-2 rounded-lg hover:bg-red-900'>Logout</button>
            
        </div>
    </div>
    </>
  )
}

export default Header