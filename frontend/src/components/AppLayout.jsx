import React from 'react'
import SideBar from './SideBar'
import DashBoard from './DashBoard'
import Loginpage from '../page/Loginpage'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='w-dvw h-dvh flex bg-[#F5F5F5] overflow-hidden'>
      <SideBar/>
        <Outlet/>
    </div>
  )
}

export default AppLayout