import React from 'react'
import WorkImageCard from '../components/WorkImageCard'

const baseImagePath = '/product_designs/'

 let OtherDesignArr = [`${baseImagePath}1.jpg`,
  `${baseImagePath}2.jpg`,
  `${baseImagePath}3.jpg`,
  `${baseImagePath}4.jpg`,
  `${baseImagePath}5.jpg`,
  `${baseImagePath}6.jpg`,
  `${baseImagePath}7.jpg`,
  
 
  ]



const OtherDesigns = () => {
  return (
    <div>
      <WorkImageCard imageArr={OtherDesignArr}/>
    </div>
  )
}

export default OtherDesigns
