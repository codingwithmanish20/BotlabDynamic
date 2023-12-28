import React from 'react'
import SideBar from '../component/SideBar'
import LoginHeader from '../component/LoginHeader'

const LayOut = ({ children }) => {
  return (
    <div>
      <LoginHeader/>
      <SideBar/>  
      <div className="content">{children}</div>
    </div>
  )
}

export default LayOut
