import React from 'react'
import banner_1 from '../assets/SoulArtistics_banner.jpg'
import banner_2 from '../assets/SoulArtistics_banner_2.jpg'

import '../styles/Hero.css'
const Hero = () => {
  return (
    <section id='hero' style={{height:'100vh'}}>
        <img src={banner_1} alt="soulartistics_banner_1" className='img-1'/>
        <img src={banner_2} alt="soulartistics_banner_2" className='img-2' />
       
        <h1 className='banner-text'>Soulartistics</h1>
        <p className='hero-subtext'>Design that speak to your soul.</p>
    </section>
  )
}

export default Hero
