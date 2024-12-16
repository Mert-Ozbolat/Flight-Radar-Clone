import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Map from './pages/Map'
import List from './pages/List'
import Header from './Components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Map />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App