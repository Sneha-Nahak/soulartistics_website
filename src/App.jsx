import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

import AllRoutes from './routes/AllRoutes'
import Footer from './components/Footer'

function App() {


  return (
    <>
     <Navbar/>  
     <AllRoutes/>
     <Footer/>
    </>
  )
}

export default App
