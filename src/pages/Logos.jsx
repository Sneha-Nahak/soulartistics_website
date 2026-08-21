import React from 'react'
import WorkImageCard from '../components/WorkImageCard'
import { generateFolderImages } from '../utils/cloudinaryHelper'

const Logos = () => {
  const images = generateFolderImages('logos', 9)

  return (
    <div>
      <WorkImageCard imageArr={images} />
    </div>
  )
}

export default Logos
