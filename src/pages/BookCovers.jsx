import React from 'react'
import WorkImageCard from '../components/WorkImageCard'
import { generateFolderImages } from '../utils/cloudinaryHelper'

const BookCovers = () => {
  const images = generateFolderImages('book_covers', 6)

  return (
    <div>
      <WorkImageCard imageArr={images} />
    </div>
  )
}

export default BookCovers
