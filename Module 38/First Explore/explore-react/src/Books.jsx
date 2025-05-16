import React from 'react'

const Books = ({book}) => {
    const {name, price} = book;
    console.log('from books')
  return (
    <div>
        <h3>Book Name: {name}</h3>
        <h3>Price: {price}</h3>
    </div>
  )
}

export default Books