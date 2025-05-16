import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setUsers(data))
    }, []);
  return (
    <div>
        <h3>Users: {users.length}</h3>
    </div>
  )
}

export default Users

/**
 * 1. Declare a state to hold or set data
 * 2. useEffect with callback & dependincies
 * 3. use fetch to load data
 * 4. set loaded the data to the state
 */