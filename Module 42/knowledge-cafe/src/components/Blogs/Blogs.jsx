import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookMark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);


    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])


  return (
    <div className='w-2/3'>
        <h1 className='text-2xl mb-20'>Hello from Blogs: {blogs.length}</h1>
        {
          blogs.map(blog => <Blog key={blog.key} blog={blog} handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead} />)
        }
    </div>
  )
}


Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}



export default Blogs