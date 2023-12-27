import { Box } from '@mui/material'
import React from 'react'
import "../styles/LoginHeader.css"
import logo from "../images/Botlab.png"

const LoginHeader = () => {
  return (
    <div>
   <Box className="login_header">
    <img className='bl_logo' src={logo} alt="logo" />
   </Box>
    </div>
  )
}

export default LoginHeader
