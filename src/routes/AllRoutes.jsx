import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Creatives from '../pages/Creatives'
import EditingAndEnhancement from '../pages/EditingAndEnhancement'
import Logos from '../pages/Logos'
import Posters from '../pages/Posters'
import Typography from '../pages/Typography'
import BookCovers from '../pages/BookCovers'
import OtherDesigns from '../pages/OtherDesigns'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/creatives' element={<Creatives/>}/>
        <Route path='/editing-&-enhancement' element={<EditingAndEnhancement/>}/>
        <Route path='/logos' element={<Logos/>}/>
        <Route path='/posters' element={<Posters/>}/>
        <Route path='/Typography' element={<Typography/>}/>
        <Route path='/book-covers' element={<BookCovers/>}/>
        <Route path='/other-designs' element={<OtherDesigns/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
