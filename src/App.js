import React from 'react'
import LoginHeader from './component/LoginHeader'
import './index.css';
import Login from './component/Login';
import { Routes, Route } from 'react-router-dom';
import LayOut from './layout/LayOut';
import Home from './pages/Home';


const App = () => {
  return (
    <div>
         <Routes>
         <Route  path="/login" element={<Login />} />
         <Route  path="/Home" element={<LayOut><Home /></LayOut>} />
         </Routes>
   

    </div>
  )
}

export default App

