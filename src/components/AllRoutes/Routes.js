import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import AddProject from '../pages/AddProject/AddProject'
import ProjectList from '../pages/ProjectList/ProjectList'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/list' element={<ProjectList/>} ></Route>
      <Route path='/add' element={<AddProject/>}></Route>
      <Route path='/login'></Route>
    </Routes>
  )
}

export default AllRoutes