import React from 'react'
import { Sidebar } from '../../Components/Sidebar';
import { AdminArea } from '../../Components/AdminArea';
import './style.css'

 const DashBoard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <AdminArea />
    </div>
  )
}

export default DashBoard;