import React from 'react'

const Singers = ({singer}) => {
  return (
    <div>
        <h3>Singer: {singer.name}</h3>
        <p>Age: {singer.age}</p>
    </div>
  )
}

export default Singers