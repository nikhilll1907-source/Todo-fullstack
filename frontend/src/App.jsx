import { useEffect, useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import AddTodo from './Components/AddTodo'
import SignUp from './Components/SignUp'
import Singin from './Components/Singin'
import axios from "axios";

import Todo from './Components/Todo'


function App() {
 
 const [Todo, SetTodo] = useState([]);

 useEffect(  () => {
  const fetchdata= async()=>{
  try{
    const response= await axios.get("http://localhost:3000/todo")
    console.log(response.data.arr);
   SetTodo(response.data.arr);
  }
  catch(err){
    console.log(`error is going on ${err}`)
  }
}
fetchdata();
 }, [])

 

  return (
    <>
   <SignUp></SignUp>
    </>
  )
}

export default App
