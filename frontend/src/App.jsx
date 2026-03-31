import { useEffect, useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import AddTodo from './Components/AddTodo'
import SignUp from './Components/SignUp'
import Singin from './Components/Singin'
import About from './Components/About'
import axios from "axios";
import { resolvePath, Route, Routes } from 'react-router-dom'

import Todo from './Components/Todo'


function App() {

let [todos,setTodos]=useState([]);
let [refresh,setRefresh]=useState(0);
let [logdin,Setlogdin]=useState(false);
    const addTodo=async(todo)=>{
      try{
       const response= await axios.post("http://localhost:3000/add-todo",{
             content:todo,      
       }, { withCredentials: true }) // withCredentials is vry important to talk
        console.log(response)
        setRefresh(prev => prev + 1);
      }
      catch(err){
        console.log(`error occured ${err}`)
      }
    }

   useEffect(  () => {
      if(!logdin) return;
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
   }, [refresh])

   
   const signup =async(username,password)=>{
     try{
      const response=await axios.post('http://localhost:3000/signup',{
        username: username,
        password: password
      },{ withCredentials: true})
      Setlogdin(true)
      console.log(response)

     }
     catch(err){
      console.log(err);
     }
   }
   const logout=async()=>{
         try{
          const response=await axios.post('http://localhost:3000/logout',{},{ withCredentials: true})
          console.log(response)
          Setlogdin(false)
          setTodos([])
        setRefresh(prev => prev + 1);
         } 
         catch(err){
          console.log(`error found in logut ${err}`)
         }
   }
 
   const login=async(username,password)=>{
    try{
      const response=await axios.post('http://localhost:3000/signin',{
        username,
        password,
      },{ withCredentials: true});
      console.log(response)
       Setlogdin(true)
      setRefresh(prev => prev + 1);
    }
    catch(err){
      console.log(err)
    }
   }
  const deleteTodo = async(id)=>{
    try{
     const response=await axios.delete(`http://localhost:3000/del-todo/${id}`,      {withCredentials:true});
     console.log(response);
     setRefresh(prev=>prev+1);
    }
    catch(err){
       console.log(`error ${err}`)
    }
   }
  // const data = [
  //   {
  //     id:1,
  //     todo: "jdsfj"
  //   },
  //   {
  //     id:2,
  //     todo: "jdsfjd"
  //   }
  // ]


  return (
    <>
      <div className='h-screen bg-gray-800'>
        <Header logout={logout}></Header>
        <Routes>
          <Route path='/' element={<Body todos={todos} deleteTodo={deleteTodo}/>}></Route>
          <Route path='/add-todo' element={<AddTodo addTodo={addTodo} />}></Route>
          <Route path='/signup' element={<SignUp signup={signup} />}></Route>
          <Route path='/login' element={<Singin login={login} />}></Route>
          <Route path='/about' element={<About  />}></Route>

        </Routes>
      </div>

    </>
  )
}

export default App
