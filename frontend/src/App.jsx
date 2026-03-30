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

let [todos,setTodos]=useState([]);

    const addTodo=async(todo)=>{
      try{
       const response= await axios.post("http://localhost:3000/add-todo",{
             content:todo,      
       }, { withCredentials: true }) // withCredentials is vry important to talk
       const newtodos=[...todos];
        newtodos.push({
       todo
       });
      setTodos(newtodos);
      }
      catch(err){
        console.log(`error occured ${err}`)
      }
    }

   useEffect(  () => {
    const fetchdata= async()=>{
    try{
      const response= await axios.get("http://localhost:3000/todo",{ withCredentials: true} )
      console.log(response.data.arr);
     setTodos(response.data.arr);
    }
    catch(err){
      console.log(`error is going on ${err}`)
    }
  }
  fetchdata();
   }, [])

   
   const signup =async(username,password)=>{
     try{
      const response=await axios.post('http://localhost:3000/signup',{
        username: username,
        password: password
      })
      console.log(response)
     }
     catch(err){
      console.log(err);
     }
   }

  const data = [
    {
      id:1,
      todo: "jdsfj"
    },
    {
      id:2,
      todo: "jdsfjd"
    }
  ]

  // function addTodo(todo){
  //    const newtodos=[...todos];
  //    newtodos.push({
  //     todo
  //    });
  //    setTodos(newtodos);
  // }

  return (
    <>
      <div className='h-screen bg-gray-800'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Body todos={todos} />}></Route>
          <Route path='/add-todo' element={<AddTodo addTodo={addTodo} />}></Route>
          <Route path='/signup' element={<SignUp signup={signup} />}></Route>
          <Route path='/login' element={<Singin />}></Route>
          <Route path='/about' element={<About />}></Route>

        </Routes>
      </div>

    </>
  )
}

export default App
