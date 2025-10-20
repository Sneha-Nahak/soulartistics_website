import React from 'react'
import WorkImageCard from '../components/WorkImageCard'

const baseImagePath = '/typography/'

 let TypographyArr = [`${baseImagePath}1.jpg`,
  `${baseImagePath}2.jpg`,
  `${baseImagePath}3.jpg`,
  `${baseImagePath}4.jpg`,
  `${baseImagePath}5.jpg`,
  `${baseImagePath}6.png`,
  `${baseImagePath}7.jpg`,

 
  ]



const Typography = () => {
  return (
    <div>
      <WorkImageCard imageArr={TypographyArr}/>
    </div>
  )
}

export default Typography
