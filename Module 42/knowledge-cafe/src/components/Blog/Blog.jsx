import React from 'react'
import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({blog, handleAddToBookMark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
  return (
    <div className='mb-20  space-y-4'>
        <img className='w-full h-[250px] mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
        <div className='flex justify-between mb-4'>
            <div className='flex'>
                <img className='w-15 h-[60px] rounded-full object-cover' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div>
                <span>{reading_time}min read</span>
                <button onClick={()=>handleAddToBookMark(blog)} className='ml-2 text-2xl text-red-600'><BsBookmarks /></button>
            </div>
        </div>
        <h2 className="text-4xl">{title}</h2>
        <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
            }
        </p>
        <button onClick={()=> handleMarkAsRead(id, reading_time)} className='text-purple-600 font-bold underline'>Mark As Read</button>
    </div>
  )
}

Blog.proTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog