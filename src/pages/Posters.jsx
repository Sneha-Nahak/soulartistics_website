import React from 'react'
import WorkImageCard from '../components/WorkImageCard'
import { generateFolderImages } from '../utils/cloudinaryHelper'

const Posters = () => {
  const images = generateFolderImages('posters', 5)

  return (
    <div>
      <WorkImageCard imageArr={images} />
    </div>
  )
}

export default Posters
