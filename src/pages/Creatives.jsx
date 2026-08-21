import React from 'react'
import WorkImageCard from '../components/WorkImageCard'
import { generateFolderImages } from '../utils/cloudinaryHelper'

const Creatives = () => {
  const images = generateFolderImages('creatives', 25)

  return (
    <div>
      <WorkImageCard imageArr={images} />
    </div>
  )
}

export default Creatives
