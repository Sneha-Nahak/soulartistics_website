import React from 'react'
import WorkImageCard from '../components/WorkImageCard'
import { generateFolderImages } from '../utils/cloudinaryHelper'

const SocialMediaDesigns = () => {
  const images = generateFolderImages('social_media_designs', 7)

  return (
    <div>
      <WorkImageCard imageArr={images} />
    </div>
  )
}

export default SocialMediaDesigns
