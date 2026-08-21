import React from 'react'
import WorkImageCard from '../components/WorkImageCard'
import { generateFolderImages } from '../utils/cloudinaryHelper'

const EditingAndEnhancement = () => {
  const images = generateFolderImages('editing_and_enhancement', 20)

  return (
    <div>
      <WorkImageCard imageArr={images} />
    </div>
  )
}

export default EditingAndEnhancement
