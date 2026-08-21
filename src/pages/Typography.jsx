import React from 'react'
import WorkImageCard from '../components/WorkImageCard'
import { generateFolderImages } from '../utils/cloudinaryHelper'

const Typography = () => {
  const images = generateFolderImages('typography', 7)

  return (
    <div>
      <WorkImageCard imageArr={images} />
    </div>
  )
}

export default Typography
