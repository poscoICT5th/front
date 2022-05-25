import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Account/Login'
import Main from './components/Pages/Main'

function App() {
  return (
    <div>

      {/* Routes */}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App