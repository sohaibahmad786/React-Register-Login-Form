import React from 'react'
import Register from './Registration_Project/Register'
import Login from './Registration_Project/Login'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Register />}/>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
