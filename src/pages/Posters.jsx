import React from 'react'
import WorkImageCard from '../components/WorkImageCard'

const baseImagePath = '/posters/'

 let PosterArr = [`${baseImagePath}1.jpg`,
  `${baseImagePath}2.jpg`,
  `${baseImagePath}3.jpg`,
  `${baseImagePath}4.jpg`,
  `${baseImagePath}5.jpg`,

 
  ]



const Posters = () => {
  return (
    <div>
      <WorkImageCard imageArr={PosterArr}/>
    </div>
  )
}

export default Posters
