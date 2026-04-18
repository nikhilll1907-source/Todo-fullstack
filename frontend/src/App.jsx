import { useEffect, useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import AddTodo from './Components/AddTodo'
import SignUp from './Components/SignUp'
import Singin from './Components/Singin'
import About from './Components/About'
import axios from "axios";
import { Navigate, resolvePath, Route, Routes } from 'react-router-dom'
import { useNavigate } from "react-router-dom";



import Todo from './Components/Todo'
const API = import.meta.env.VITE_BACKEND2;

function App() {
    let [username,setUsername]=useState('User');
  let [todos, setTodos] = useState([]);
  let [refresh, setRefresh] = useState(0);
  let [logdin, Setlogdin] = useState(false);

  useEffect(() => {
    const isLogdin=async()=>{
    try {
      const response = await axios.get(`${API}/user/isLogdin`, { withCredentials: true })
      console.log(response)
      Setlogdin(true)
      setRefresh(prev=>prev+1)
      setUsername(response.data.username)
      console.log(response.data.username)
    }
    catch (err) {
      console.log(`error user  is not logdin ${err}`)
    }   
  }
  isLogdin()
  }, [])
  const addTodo = async (content) => {
    try {
      const response = await axios.post(`${API}/todo/add-todo`, {
        title: content.title,
        task: content.task,
      }, { withCredentials: true }) // withCredentials is vry important to talk
      console.log(response)
      setRefresh(prev => prev + 1);
    }
    catch (err) {
      console.log(`error occured ${err}`)
    }
  }

  useEffect(() => {
    if (!logdin) return;
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${API}/todo/todo`, { withCredentials: true })
        console.log(response.data.todos);
        setTodos(response.data.todos);
      }
      catch (err) {
        console.log(`error is going on ${err}`)
      }
    }
    fetchdata();
  }, [refresh])


  const signup = async (username, password) => {
    try {
      const res = await axios.post(`${API}/user/signup`, {
        username,
        password
      }, { withCredentials: true });
         Setlogdin(true)
      return res.data;
    } catch (err) {
      throw err.response?.data?.err || "Something went wrong";
    }
  };
  const logout = async () => {
    try {
      const response = await axios.post(`${API}/user/logout`, {}, { withCredentials: true })
      console.log(response)
      Setlogdin(false)
      setTodos([])
      setRefresh(prev => prev + 1);
    }
    catch (err) {
      console.log(`error found in logut ${err}`)
    }
  }

  const login = async (username, password) => {
    try {
      const res = await axios.post(`${API}/user/login`, {
        username,
        password
      }, { withCredentials: true });
      Setlogdin(true)
      setRefresh(prev => prev + 1)
      return res.data;
    } catch (err) {
      throw err.response?.data?.error || "Login failed";
    }
  };
  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${API}/todo/del-todo/${id}`, { withCredentials: true });
      console.log(response);
      setRefresh(prev => prev + 1);
    }
    catch (err) {
      console.log(`error ${err}`)
    }
  }


  return (
    <>
      <div className='min-h-screen bg-gray-100'>

        <Header logout={logout} logdin={logdin} />

        <Routes>
          <Route
            path='/'
            element={
              logdin
                ? <Body username={username} todos={todos} deleteTodo={deleteTodo} />
                : <Navigate to='/login' />
            }
          />

          <Route
            path='/add-todo'
            element={
              logdin
                ? <AddTodo addTodo={addTodo} />
                : <Navigate to='/login' />
            }
          />

          <Route
            path='/signup'
            element={
              !logdin
                ? <SignUp signup={signup} />
                : <Navigate to='/' />
            }
          />

          <Route
            path='/login'
            element={
              !logdin
                ? <Singin login={login} logdin={logdin} />
                : <Navigate to='/' />
            }
          />

          <Route path='/about' element={<About />} />

        </Routes>
      </div>
    </>
  )
}

export default App
