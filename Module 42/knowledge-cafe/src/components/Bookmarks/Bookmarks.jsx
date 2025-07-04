import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4'>
      <h3 className="text-4xl mb-5">Spent time on read: {readingTime}</h3>
        <h2 className='text-3xl text-center '>Bookmarked Blogs: {bookmarks.length}</h2>
        {
          bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark} />)
        }
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}

export default Bookmarks