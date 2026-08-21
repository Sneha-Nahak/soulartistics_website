import React from 'react'
import WorkImageCard from '../components/WorkImageCard'

const baseImagePath = '/social_media_designs/'

 let SocialMediaDesignArr = [`${baseImagePath}1.jpg`,
  `${baseImagePath}2.jpg`,
  `${baseImagePath}3.jpg`,
  `${baseImagePath}4.jpg`,
  `${baseImagePath}5.jpg`,
  `${baseImagePath}6.jpg`,
  `${baseImagePath}7.jpg`,
  
 
  ]



const SocialMediaDesigns = () => {
  return (
    <div>
      <WorkImageCard imageArr={SocialMediaDesignArr}/>
    </div>
  )
}

export default SocialMediaDesigns
