import React from 'react'
import DashboardMain from './DashboardMain'

const DashBoard = () => {
  return (
    <div className='w-full h-full p-[0.6vw] overflow-hidden'>
      <div className='size-full p-[1vw]'>
      <h1 className="text-[1vw] font-semibold h-[2.2vw] flex items-center"><p>{">"} DashBoard</p></h1>
      <DashboardMain/>
      
      </div>
    </div>
  )
}

export default DashBoard