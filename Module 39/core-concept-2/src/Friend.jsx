import React from 'react'

const Friend = ({friend}) => {
    console.log(friend);
    const {name, email} = friend;
  return (
    <div className='friend-container'>
        <h4>Name: {name}</h4>
        <p>Email: {email}</p>
    </div>
  )
}

export default Friend