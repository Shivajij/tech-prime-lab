import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import AddProject from '../pages/AddProject/AddProject';
import ProjectList from '../pages/ProjectList/ProjectList';
import Login from '../Login/Login';
import PrivateRoute from './PrivateRoute';

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<PrivateRoute Component={Dashboard} />} />
      <Route path='/list' element={<PrivateRoute Component={ProjectList} />} />
      <Route path='/add' element={<PrivateRoute Component={AddProject} />} />
    </Routes>
  );
}

export default AllRoutes;
