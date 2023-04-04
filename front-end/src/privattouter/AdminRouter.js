import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const AdminRouter = () => {
  return (
    (localStorage.getItem('role')==='admin')?<Outlet/>:<Navigate to={'*'}/>
  )
}

export default AdminRouter