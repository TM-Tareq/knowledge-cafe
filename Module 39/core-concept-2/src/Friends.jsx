import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Friend from './Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setFriends(data))
    }, []);
  return (
    <div>
        <h3>Friends: {friends.length}</h3>
        {
            friends.map(friend=> <Friend friend={friend} />)
        }
    </div>
  )
}

export default Friends

/**
 * For data loading use useEffect
 */