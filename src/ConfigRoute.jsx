import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from 'pages/HomePage'
import SignupPage from 'pages/SignupPage'
import VehicleSignupPage from 'pages/VehicleSignupPage'

function ConfigRoute() {
  return (
    <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path = 'signin'> 
          <Route path = 'signup' element = {<SignupPage/>}/>
        </Route>
        <Route path = 'car-signup' element= {<VehicleSignupPage/>} />
    </Routes>
  )
}

export default ConfigRoute