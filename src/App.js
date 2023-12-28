import React from 'react'
import LoginHeader from './component/LoginHeader'
import './index.css';
import Login from './component/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import LayOut from './layout/LayOut';
import Home from './pages/Home';
import { useAuth } from './context/AuthContext';


const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div>
         <Routes>     
        {!isAuthenticated && <Route path="*" element={<Navigate to="/login" />} />}
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        {/* Private routes (require authentication) */}
        {isAuthenticated && (
          <Route
            path="/"
            element={<LayOut><Home /></LayOut>}
          />
        )}
      </Routes>
    </div>
  )
}

export default App

