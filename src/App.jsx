import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Map from './pages/Map'
import List from './pages/List'
import Header from './Components/Header'
import { useDispatch } from 'react-redux'
import { getFlights } from './redux/actions/index'
import Modal from './Components/Modal'


const App = () => {
  const [detailId, setDetailId] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights())
  }, [])


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Map setDetailId={setDetailId} />} />
        <Route path='/list' element={<List />} />
      </Routes>

      {
        detailId && <Modal id={detailId} close={() => setDetailId(null)} />
      }

    </BrowserRouter>
  )
}

export default App