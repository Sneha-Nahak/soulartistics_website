import React from 'react'
import WorkImageCard from '../components/WorkImageCard';


const baseImagePath = '/creatives/'

 let creativesArr = [`${baseImagePath}pic-1.jpg`,
  `${baseImagePath}pic-2.jpg`,
  `${baseImagePath}pic-3.jpg`,
  `${baseImagePath}pic-4.jpg`,
  `${baseImagePath}pic-5.jpg`,
  `${baseImagePath}pic-6.jpg`,
  `${baseImagePath}pic-7.jpg`,
  `${baseImagePath}pic-8.jpg`,
  `${baseImagePath}pic-9.jpg`,
  `${baseImagePath}pic-10.jpg`,
  `${baseImagePath}pic-11.jpg`,
  `${baseImagePath}pic-12.jpg`,
  `${baseImagePath}pic-13.jpg`,
  `${baseImagePath}pic-14.jpg`,
  `${baseImagePath}pic-15.jpg`,
  `${baseImagePath}pic-16.jpg`,
  `${baseImagePath}pic-17.jpg`,
  `${baseImagePath}pic-18.jpg`,
  `${baseImagePath}pic-19.jpg`,
  `${baseImagePath}pic-20.jpg`,
  `${baseImagePath}pic-21.jpg`,
  `${baseImagePath}pic-22.jpg`,
  `${baseImagePath}pic-23.jpg`,
  `${baseImagePath}pic-24.jpg`,
  `${baseImagePath}pic-25.jpg`,
  ]

const Creatives = () => {

 
  return (
   <div>
    <WorkImageCard imageArr={creativesArr}/>
    
   </div>
  )
}

export default Creatives
