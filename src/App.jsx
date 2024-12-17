import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Map from './pages/Map'
import List from './pages/List'
import Header from './Components/Header'
import { useDispatch } from 'react-redux'
import { getFlights } from './redux/actions/index'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights())
  }, [])


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