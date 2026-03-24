import { useEffect, useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import AddTodo from './Components/AddTodo'
import SignUp from './Components/SignUp'
import Singin from './Components/Singin'
import About from './Components/About'
import axios from "axios";
import { Route, Routes } from 'react-router-dom'

import Todo from './Components/Todo'


function App() {

  //  const [Todo, SetTodo] = useState([]);

  //  useEffect(  () => {
  //   const fetchdata= async()=>{
  //   try{
  //     const response= await axios.get("http://localhost:3000/todo")
  //     console.log(response.data.arr);
  //    SetTodo(response.data.arr);
  //   }
  //   catch(err){
  //     console.log(`error is going on ${err}`)
  //   }
  // }
  // fetchdata();
  //  }, [])

  const data = [
    {
      todo: "jdsfj"
    },
    {
      todo: "jdsfjd"
    }
  ]

  return (
    <>
      <div className='h-screen bg-gray-800'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Body todos={data} />}></Route>
          <Route path='/add-todo' element={<AddTodo />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Singin />}></Route>
          <Route path='/about' element={<About />}></Route>

        </Routes>
      </div>

    </>
  )
}

export default App
