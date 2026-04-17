import React, { Activity } from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header({logout,logdin}) {
 return (
  <>
    <div className='bg-white shadow-md flex w-full justify-between p-3'>
      
      {/* Logo */}
      <div className='p-2 text-xl font-bold text-blue-500'>
        Logo
      </div>

      {/* Nav Links */}
      <div className='flex gap-3 items-center'>

        <NavLink
          className={({ isActive }) =>
            `px-3 py-1 rounded-lg transition ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
          to='/'
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `px-3 py-1 rounded-lg transition ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
          to='/add-todo'
        >
          Add-Todo
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `px-3 py-1 rounded-lg transition ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
          to='/about'
        >
          About
        </NavLink>

        {!logdin && (
          <NavLink
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg transition ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
            to='/login'
          >
            Login
          </NavLink>
        )}

        {logdin && (
          <button
            onClick={() => logout()}
            className='bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition'
          >
            Logout
          </button>
        )}

      </div>
    </div>
  </>
)
}

export default Header