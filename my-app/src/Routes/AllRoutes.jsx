import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllOrders from '../Admin/AllOrders'
import Shipped from '../Admin/Shipped'
import Completed from '../Admin/Completed'
import Login from '../auth/Login'
import Editor from '../Components/Editor'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/allorders' element={<PrivateRoute><AllOrders /></PrivateRoute>} />
            <Route path='/shipped--orders' element={<Shipped />} />
            <Route path='/completed' element={<PrivateRoute><Completed /></PrivateRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Editor />} />
        </Routes>
    </div>
  )
}

export default AllRoutes