import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import TodoDetails from './pages/TodoDetails'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/details' 
            element={
              <ProtectedRoute>  
                <TodoDetails /> 
              </ProtectedRoute>
            }/>
          
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
