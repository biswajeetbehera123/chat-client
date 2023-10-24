import React from 'react'
import "./myStyles.css"
import Sidebar from './Sidebar'
// import ChatArea from './ChatArea'
// import Welcome from './Welcome'
// import CreateGroups from './CreateGroups'
// import Users_Groups from './Users'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
  
  return (
    <div className='main-container'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default MainContainer
