import React from 'react'
import Navbar from './pages/Navbar'
import Sidebar from './pages/Sidebar'
import {Outlet} from 'react-router-dom'

const DashboardAdmin = () => {
  return (
    <main className='container-fluid bg-white'>
        <div className='row d-flex flex-nowrap'>
            <Sidebar/>
            <div className='col'>
                <div className='row'>
                    <Navbar/>
                </div>
                <Outlet/>
            </div>
        </div>
    </main>
)}

export default DashboardAdmin