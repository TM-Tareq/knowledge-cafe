import React from 'react'
import "./App.css"

const Student = ({name= '', grade = '', score = 0}) => {
  return (
    <div className='stu'>
        <h1>This is a Student</h1>
        <p>Name: {name}</p>
        <p>His score: {score}</p>
        <p>Grade is: {grade}</p>

    </div>
  )
}

export default Student