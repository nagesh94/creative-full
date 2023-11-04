import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import InputDetails from './pages/InputDetails'
import ShowDetails from './pages/ShowDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/inputdetails' element={<InputDetails/>}/>
            <Route path='/showdetails' element={<ShowDetails/>}/>
          </Routes>
     
    </>
  )
}

export default App
