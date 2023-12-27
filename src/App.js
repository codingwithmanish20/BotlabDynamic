import React from 'react'
import LoginHeader from './component/LoginHeader'
import './index.css';
import Login from './component/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


const App = () => {
  return (
    <div>
         <Routes>
         <Route  path="/login" element={<Login />} />
         <Route  path="/Home" element={<Home />} />
         </Routes>
   

    </div>
  )
}

export default App

