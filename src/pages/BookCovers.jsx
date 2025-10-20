import React from 'react'

import WorkImageCard from '../components/WorkImageCard';


const baseImagePath = '/book_covers/'

 let BookCoverArr = [`${baseImagePath}1.jpg`,
  `${baseImagePath}2.jpg`,
  `${baseImagePath}3.jpg`,
  `${baseImagePath}4.jpg`,
  `${baseImagePath}5.jpg`,
  `${baseImagePath}6.jpg`,
 
  ]


const BookCovers = () => {
  return (
    <div>
      <WorkImageCard imageArr={BookCoverArr}/>
    </div>
  )
}

export default BookCovers
