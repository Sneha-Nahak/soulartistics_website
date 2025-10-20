import React from 'react'

import WorkImageCard from '../components/WorkImageCard';


const baseImagePath = '/editing_and_enhancement/'

 let EditingArr = [`${baseImagePath}1-min.jpg`,
  `${baseImagePath}2-min.jpg`,
  `${baseImagePath}3-min.jpg`,
  `${baseImagePath}4-min.jpg`,
  `${baseImagePath}5-min.jpg`,
  `${baseImagePath}6-min.jpg`,
  `${baseImagePath}7-min.jpg`,
  `${baseImagePath}8-min.jpg`,
  `${baseImagePath}9-min.jpg`,
  `${baseImagePath}10-min.jpg`,
  `${baseImagePath}11-min.jpg`,
  `${baseImagePath}12-min.jpg`,
  `${baseImagePath}13-min.jpg`,
  `${baseImagePath}14-min.jpg`,
  `${baseImagePath}15-min.jpg`,
  `${baseImagePath}16-min.jpg`,
  `${baseImagePath}17-min.jpg`,
  `${baseImagePath}18-min.jpg`,
  `${baseImagePath}19-min.jpg`,
  `${baseImagePath}20-min.jpg`,
 
  ]

const EditingAndEnhancement = () => {
  return (
    <div>
      <WorkImageCard imageArr={EditingArr}/>
    </div>
  )
}

export default EditingAndEnhancement
