import React from 'react'
import WorkImageCard from '../components/WorkImageCard'

const baseImagePath = '/logos/'

 let LogoArr = [`${baseImagePath}1.png`,
  `${baseImagePath}2.png`,
  `${baseImagePath}3.jpg`,
  `${baseImagePath}4.jpg`,
  `${baseImagePath}5.jpg`,
  `${baseImagePath}6.png`,
  `${baseImagePath}7.jpg`,
  `${baseImagePath}8.jpg`,
  `${baseImagePath}9.jpg`,

 
  ]



const Logos = () => {
  return (
    <div>
      <WorkImageCard imageArr={LogoArr}/>
    </div>
  )
}

export default Logos
