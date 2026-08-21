// routes/AllRoutes.jsx
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Creatives from '../pages/Creatives'
import EditingAndEnhancement from '../pages/EditingAndEnhancement'
import Logos from '../pages/Logos'
import Posters from '../pages/Posters'
import Typography from '../pages/Typography'
import BookCovers from '../pages/BookCovers'
import SocialMediaDesigns from '../pages/SocialMediaDesigns'
import UIUXBranding from '../pages/UIUXBranding'
import ScrollToTop from '../components/ScrollToTop'

const AllRoutes = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/creatives' element={<Creatives/>}/>
        <Route path='/editing_and_enhancement' element={<EditingAndEnhancement/>}/>
        <Route path='/logos' element={<Logos/>}/>
        <Route path='/posters' element={<Posters/>}/>
        <Route path='/typography' element={<Typography/>}/>
        <Route path='/book-covers' element={<BookCovers/>}/>
        <Route path='/social-media-designs' element={<SocialMediaDesigns/>}/>
        <Route path='/ui-ux-branding' element={<UIUXBranding/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes