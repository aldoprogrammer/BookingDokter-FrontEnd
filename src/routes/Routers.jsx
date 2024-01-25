import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/doctor-account/Dashboard'
import ProtectedRoute from './ProtectedRoute'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:id' element={<DoctorDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route 
          path='/users/profile/me' 
          element={
          <ProtectedRoute allowedRoles={["patient"]}> 
            <MyAccount />
          </ProtectedRoute>    
          } />
        <Route 
          path='/doctors/profile/me' 
          element={
            <ProtectedRoute allowedRoles={["doctor"]}> 
              <Dashboard />
            </ProtectedRoute>
          } />
    </Routes>
    
  )
}

export default Routers