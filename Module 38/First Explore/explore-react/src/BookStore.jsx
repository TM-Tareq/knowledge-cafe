import React from 'react'
import Books from './Books'

const BookStore = ({books}) => {
    console.log(books)
  return (
    <div>
        <h3>Books: {books.length}</h3>
        {
            books.map(book => <Books book={book} />
            )
        }
    </div>
  )
}

export default BookStore